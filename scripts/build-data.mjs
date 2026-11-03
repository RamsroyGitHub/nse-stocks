import fs from "node:fs";

const proto = "https";
const host = ["nsearchives", "nseindia", "com"].join(".");
const refHost = ["www", "nseindia", "com"].join(".");
const base = proto + "://" + host;
const HEAD = { "User-Agent": "Mozilla/5.0", Referer: proto + "://" + refHost + "/" };

function parseLine(line) {
  const out = [];
  let cur = "";
  let q = false;
  for (const ch of line) {
    if (ch === '"') q = !q;
    else if (ch === "," && !q) { out.push(cur.trim()); cur = ""; }
    else cur += ch;
  }
  out.push(cur.trim());
  return out;
}

const num = v => {
  const n = parseFloat(String(v).replace(/,/g, ""));
  return isFinite(n) ? n : null;
};
const round = (v, d) => (v === null ? null : +v.toFixed(d));

async function get(url) {
  const r = await fetch(url, { headers: HEAD });
  if (!r.ok) throw new Error("HTTP " + r.status + " for " + url.split("/").pop());
  return r.text();
}

async function main() {
  let text = null;
  let used = null;
  for (let i = 0; i < 10 && !text; i++) {
    const d = new Date(Date.now() - i * 864e5);
    const ds = String(d.getUTCDate()).padStart(2, "0") + String(d.getUTCMonth() + 1).padStart(2, "0") + d.getUTCFullYear();
    try {
      const t = await get(base + "/products/content/sec_bhavdata_full_" + ds + ".csv");
      if (t.split("\n").length > 500) { text = t; used = ds; }
    } catch (e) {
      console.log(ds, e.message);
    }
  }
  if (!text) throw new Error("No price file found");

  const lines = text.split(/\r?\n/).filter(Boolean);
  const head = parseLine(lines[0]).map(h => h.toUpperCase());
  console.log("Columns:", head.join(" | "));
  const ix = n => head.indexOf(n);
  const need = ["SYMBOL", "SERIES", "PREV_CLOSE", "OPEN_PRICE", "HIGH_PRICE", "LOW_PRICE", "CLOSE_PRICE", "TTL_TRD_QNTY", "TURNOVER_LACS", "DELIV_PER", "DATE1"];
  const missing = need.filter(n => ix(n) < 0);
  if (missing.length) throw new Error("Missing columns: " + missing.join(", "));

  const names = {};
  try {
    const nt = await get(base + "/content/equities/EQUITY_L.csv");
    const nl = nt.split(/\r?\n/).filter(Boolean);
    const nh = parseLine(nl[0]).map(h => h.toUpperCase());
    const si = nh.indexOf("SYMBOL");
    const ni = nh.findIndex(h => h.startsWith("NAME"));
    for (const l of nl.slice(1)) {
      const c = parseLine(l);
      if (c[si] && c[ni]) names[c[si]] = c[ni];
    }
  } catch (e) {
    console.log("Company names not loaded:", e.message);
  }

  const stocks = [];
  let tradeDate = "";
  for (const l of lines.slice(1)) {
    const c = parseLine(l);
    const series = c[ix("SERIES")];
    if (series !== "EQ" && series !== "BE") continue;
    const price = num(c[ix("CLOSE_PRICE")]);
    if (price === null) continue;
    const prev = num(c[ix("PREV_CLOSE")]);
    const sym = c[ix("SYMBOL")];
    tradeDate = c[ix("DATE1")] || tradeDate;
    const turnoverLacs = num(c[ix("TURNOVER_LACS")]);
    stocks.push({
      sym,
      name: names[sym] || sym,
      series,
      price,
      prev,
      open: num(c[ix("OPEN_PRICE")]),
      high: num(c[ix("HIGH_PRICE")]),
      low: num(c[ix("LOW_PRICE")]),
      volume: num(c[ix("TTL_TRD_QNTY")]),
      turnoverCr: turnoverLacs === null ? null : round(turnoverLacs / 100, 2),
      delivPct: num(c[ix("DELIV_PER")]),
      d1: prev ? round(((price - prev) / prev) * 100, 2) : null
    });
  }

  fs.mkdirSync("public/data", { recursive: true });
  fs.writeFileSync("public/data/stocks.json", JSON.stringify({ tradeDate, fileDate: used, count: stocks.length, stocks }));
  console.log("Stocks:", stocks.length, "| with company names:", stocks.filter(s => s.name !== s.sym).length, "| date:", tradeDate);
  console.log("Sample:", JSON.stringify(stocks[0]));
}

main().catch(e => { console.error(e.message); process.exit(1); });
