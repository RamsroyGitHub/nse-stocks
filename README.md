# NSE Stocks: live Nifty 50 list with broker referral links

A small Node app (no build step). The server fetches delayed quotes for the 50 Nifty stocks and four indices,
caches them for 20 seconds, and serves a CoinGecko-style table with search, sort, sector filter, watchlist,
top gainers/losers, a price-history chart per stock and your broker referral buttons.

## 1. Add your referral links
Open `config.json` and paste your link into each broker's `"referralUrl"` (Zerodha/Kite, Groww, Angel One, Upstox).
Brokers with an empty link show "Referral link not set". Keep the `disclosure` text: referral earnings should be disclosed.

## 2. Run it
    npm install
    npm start          # http://localhost:3000
Needs Node 18 or newer and outbound internet access.

## 3. Deploy
Any Node host works (Render, Railway, Fly.io, a VPS). Build command `npm install`, start command `npm start`.
The app reads the `PORT` environment variable.

## Data source and its limits
Quotes come from Yahoo Finance through the `yahoo-finance2` package. It is free and unofficial and prices are
delayed, so it can change or rate-limit without notice. The server serves the last good data if a refresh fails.
Before you grow traffic, switch to a licensed feed or your broker's official API (Kite Connect, Upstox, Angel One
SmartAPI): replace `loadQuotes()` in `server.js`, keeping the same JSON shape, and the front end needs no changes.

## Updating the stock list
`symbols.js` holds the Nifty 50 constituents. NSE reviews the index twice a year; edit that file when it changes.
