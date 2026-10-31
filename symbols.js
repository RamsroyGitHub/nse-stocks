// Nifty 50 constituents (as listed by 5paisa on 30 Oct 2026). Yahoo symbols use the .NS suffix.
// Index membership changes at NSE reviews: edit this list when it does.
export const STOCKS = [
  ["ASIANPAINT","Asian Paints","Paints"],["SUNPHARMA","Sun Pharmaceutical","Pharma"],["CIPLA","Cipla","Pharma"],
  ["JSWSTEEL","JSW Steel","Metals"],["EICHERMOT","Eicher Motors","Auto"],["HDFCBANK","HDFC Bank","Banking"],
  ["NESTLEIND","Nestle India","FMCG"],["TCS","Tata Consultancy Services","IT"],["GRASIM","Grasim Industries","Diversified"],
  ["ICICIBANK","ICICI Bank","Banking"],["HINDALCO","Hindalco Industries","Metals"],["POWERGRID","Power Grid Corporation","Power"],
  ["HINDUNILVR","Hindustan Unilever","FMCG"],["MARUTI","Maruti Suzuki India","Auto"],["ITC","ITC","FMCG"],
  ["AXISBANK","Axis Bank","Banking"],["TRENT","Trent","Retail"],["HCLTECH","HCL Technologies","IT"],
  ["LT","Larsen & Toubro","Infrastructure"],["ONGC","Oil & Natural Gas Corp","Energy"],["M&M","Mahindra & Mahindra","Auto"],
  ["NTPC","NTPC","Power"],["RELIANCE","Reliance Industries","Energy"],["COALINDIA","Coal India","Energy"],
  ["TATACONSUM","Tata Consumer Products","FMCG"],["BHARTIARTL","Bharti Airtel","Telecom"],
  ["TMPV","Tata Motors Passenger Vehicles","Auto"],["TECHM","Tech Mahindra","IT"],["TATASTEEL","Tata Steel","Metals"],
  ["JIOFIN","Jio Financial Services","Financial services"],["APOLLOHOSP","Apollo Hospitals","Healthcare"],
  ["BSE","BSE","Financial services"],["DRREDDY","Dr Reddy's Laboratories","Pharma"],["ADANIPORTS","Adani Ports & SEZ","Infrastructure"],
  ["TITAN","Titan Company","Consumer"],["HDFCLIFE","HDFC Life Insurance","Insurance"],["SBIN","State Bank of India","Banking"],
  ["SBILIFE","SBI Life Insurance","Insurance"],["SHRIRAMFIN","Shriram Finance","Financial services"],
  ["MAXHEALTH","Max Healthcare","Healthcare"],["BEL","Bharat Electronics","Defence"],["ULTRACEMCO","UltraTech Cement","Cement"],
  ["KOTAKBANK","Kotak Mahindra Bank","Banking"],["BAJAJ-AUTO","Bajaj Auto","Auto"],["INFY","Infosys","IT"],
  ["BAJAJFINSV","Bajaj Finserv","Financial services"],["BAJFINANCE","Bajaj Finance","Financial services"],
  ["INDIGO","InterGlobe Aviation (IndiGo)","Aviation"],["ADANIENT","Adani Enterprises","Conglomerate"],["ETERNAL","Eternal","Consumer internet"]
].map(([sym,name,sector]) => ({ sym, name, sector, yahoo: sym + ".NS" }));

export const INDICES = [
  { id: "^NSEI", name: "Nifty 50" }, { id: "^BSESN", name: "Sensex" }, { id: "^NSEBANK", name: "Nifty Bank" },
  { id: "^INDIAVIX", name: "India VIX" }
];
