import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { STOCKS, INDICES } from "./symbols.js";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;
const QUOTE_TTL = 60_000;
const CHART_TTL = 10 * 60_000;

const cache = new Map();
async function cached(key, ttl, load) {
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < ttl) return hit.data;
  try {
    const data = await load();
    cache.set(key, { at: Date.now(), data });
    return data;
  } catch (err) {
    if (hit) return { ...hit.data, stale: true };
    throw err;
  }
}

const num = v => (typeof v === "number" && isFinite(v) ? v : null);

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";
async function yget(sym, query) {
  let lastErr;
  for (const host of ["query1", "query2"]) {
    try {
      const r = await fetch(`https://${host}.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(sym)}?${query}`, { headers: { "User-Agent": UA, Accept: "application/json" } });
      if (!r.ok) throw new Error("HTTP " + r.status);
      const j = await r.json();
      const res = j && j.chart && j.chart.result && j.chart.result[0];
      if (!res) throw new Error("no data");
      return res;
    } catch (e) { lastErr = e; }
  }
  throw lastErr;
}

async function pool(items, size, fn) {
  const out = new Array(items.length); let i = 0;
  await Promise.all(Array.from({ length: size }, async () => {
    while (i < items.length) { const k = i++; out[k] = await fn(items[k]).catch(() => null); }
  }));
  return out;
}

const lastGood = new Map();

function toQuote(id, res) {
  const m = res.meta || {};
  const price = num(m.regularMarketPrice), prev = num(m.chartPreviousClose);
  return {
    price, prevClose: prev,
    change: price !== null && prev ? +(price - prev).toFixed(2) : null,
    d1: price !== null && prev ? +(((price - prev) / prev) * 100).toFixed(2) : null,
    volume: num(m.regularMarketVolume), dayHigh: num(m.regularMarketDayHigh), dayLow: num(m.regularMarketDayLow),
    high52: num(m.fiftyTwoWeekHigh), low52: num(m.fiftyTwoWeekLow),
    time: m.regularMarketTime ? new Date(m.regularMarketTime * 1000).toISOString() : null
  };
}

async function loadQuotes() {
  const ids = [...STOCKS.map(s => s.yahoo), ...INDICES.map(i => i.id)];
  const got = await pool(ids, 6, async id => {
    const q = toQuote(id, await yget(id, "range=1d&interval=1d"));
    lastGood.set(id, q);
    return q;
  });
  const by = {}; ids.forEach((id, k) => { by[id] = got[k] || lastGood.get(id) || {}; });
  if (!got.some(Boolean) && !ids.some(id => lastGood.has(id))) throw new Error("Yahoo blocked or unreachable");
  const stocks = STOCKS.map((s, i) => ({ rank: i + 1, sym: s.sym, name: s.name, sector: s.sector, cap: null, ...by[s.yahoo] }));
  const indices = INDICES.map(i => ({ name: i.name, price: by[i.id].price ?? null, d1: by[i.id].d1 ?? null }));
  return { fetchedAt: new Date().toISOString(), marketState: null, stocks, indices };
}

async function loadChart(sym) {
  const s = STOCKS.find(x => x.sym === sym);
  if (!s) throw new Error("unknown symbol");
  const res = await yget(s.yahoo, "range=1y&interval=1d");
  const ts = res.timestamp || [], cl = (res.indicators && res.indicators.quote && res.indicators.quote[0].close) || [];
  const points = ts.map((t, k) => [new Date(t * 1000).toISOString().slice(0, 10), cl[k]]).filter(p => num(p[1]) !== null).map(p => [p[0], +p[1].toFixed(2)]);
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
