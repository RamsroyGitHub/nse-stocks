import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yahooFinance from "yahoo-finance2";
import { STOCKS, INDICES } from "./symbols.js";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;
const QUOTE_TTL = 20_000;        // ms: how long quotes are reused (protects the upstream from heavy traffic)
const CHART_TTL = 10 * 60_000;
try { yahooFinance.suppressNotices(["yahooSurvey"]); } catch {}

const cache = new Map();         // key -> { at, data }
async function cached(key, ttl, load) {
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < ttl) return hit.data;
  try {
    const data = await load();
    cache.set(key, { at: Date.now(), data });
    return data;
  } catch (err) {
    if (hit) return { ...hit.data, stale: true };   // serve last good data if upstream fails
    throw err;
  }
}

const num = v => (typeof v === "number" && isFinite(v) ? v : null);

async function loadQuotes() {
  const syms = [...STOCKS.map(s => s.yahoo), ...INDICES.map(i => i.id)];
  const res = await yahooFinance.quote(syms, {}, { validateResult: false });
  const by = Object.fromEntries(res.map(r => [r.symbol, r]));
  const stocks = STOCKS.map((s, i) => {
    const q = by[s.yahoo] || {};
    return {
      rank: i + 1, sym: s.sym, name: s.name, sector: s.sector,
      price: num(q.regularMarketPrice), change: num(q.regularMarketChange), d1: num(q.regularMarketChangePercent),
      prevClose: num(q.regularMarketPreviousClose), volume: num(q.regularMarketVolume),
      cap: num(q.marketCap), high52: num(q.fiftyTwoWeekHigh), low52: num(q.fiftyTwoWeekLow),
      dayHigh: num(q.regularMarketDayHigh), dayLow: num(q.regularMarketDayLow),
      time: q.regularMarketTime ? new Date(q.regularMarketTime).toISOString() : null
    };
  });
  const indices = INDICES.map(i => {
    const q = by[i.id] || {};
    return { name: i.name, price: num(q.regularMarketPrice), d1: num(q.regularMarketChangePercent) };
  });
  return { fetchedAt: new Date().toISOString(), marketState: (res[0] && res[0].marketState) || null, stocks, indices };
}

async function loadChart(sym) {
  const s = STOCKS.find(x => x.sym === sym);
  if (!s) throw new Error("unknown symbol");
  const period1 = new Date(Date.now() - 400 * 864e5);
  const r = await yahooFinance.chart(s.yahoo, { period1, interval: "1d" }, { validateResult: false });
  const points = (r.quotes || []).filter(q => num(q.close) !== null).map(q => [new Date(q.date).toISOString().slice(0, 10), +q.close.toFixed(2)]);
  return { sym, points };
}

const MIME = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml" };
const json = (res, code, body) => { res.writeHead(code, { "Content-Type": "application/json", "Cache-Control": "no-store" }); res.end(JSON.stringify(body)); };

http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://x");
  try {
    if (url.pathname === "/api/quotes") return json(res, 200, await cached("quotes", QUOTE_TTL, loadQuotes));
    if (url.pathname.startsWith("/api/chart/")) {
      const sym = decodeURIComponent(url.pathname.slice(11));
      return json(res, 200, await cached("chart:" + sym, CHART_TTL, () => loadChart(sym)));
    }
    if (url.pathname === "/api/config") return json(res, 200, JSON.parse(fs.readFileSync(path.join(__dir, "config.json"), "utf8")));
    const file = path.join(__dir, "public", url.pathname === "/" ? "index.html" : path.normalize(url.pathname).replace(/^(\.\.[/\\])+/, ""));
    if (!file.startsWith(path.join(__dir, "public")) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); return res.end("Not found"); }
    res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  } catch (err) {
    console.error(err.message);
    json(res, 502, { error: "Could not load market data right now. Try again shortly." });
  }
}).listen(PORT, () => console.log("NSE Stocks running on http://localhost:" + PORT));
