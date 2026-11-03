<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>NSE Stocks: all NSE stocks, top gainers, losers and volume</title>
<meta name="description" content="Browse every NSE stock with price, daily change, volume and traded value. Search, rank and track top gainers and losers.">
<style>
:root{--bg:#f6f7f9;--surface:#fff;--ink:#14181f;--mute:#667085;--line:#e4e7ec;--up:#12a150;--down:#e03c3c;--chip:#eef1f5;--brand:#2b59ff;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#0f1318;--surface:#171c23;--ink:#eef1f5;--mute:#98a2b3;--line:#262d37;--chip:#212833;--up:#3ddc84;--down:#ff6b6b;--brand:#6e8bff}}
:root[data-theme="dark"]{--bg:#0f1318;--surface:#171c23;--ink:#eef1f5;--mute:#98a2b3;--line:#262d37;--chip:#212833;--up:#3ddc84;--down:#ff6b6b;--brand:#6e8bff}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font:15px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
.wrap{max-width:1120px;margin:0 auto;padding:20px 16px 48px}
header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px}
h1{font-size:22px;margin:0}.sub{color:var(--mute);font-size:13px;margin-top:2px}
.disc{background:var(--chip);border-radius:10px;padding:9px 12px;font-size:13px;color:var(--mute);margin-bottom:14px}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin-bottom:10px}
.card{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:10px 14px}
.card span{display:block;color:var(--mute);font-size:12px}.card b{font-size:18px}
.bar{display:flex;height:8px;border-radius:99px;overflow:hidden;background:var(--line);margin:0 0 16px}
.bar i{display:block;height:100%}
.mini{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin-bottom:16px}
.mini h3{margin:0 0 6px;font-size:14px}
.mini div.r{display:flex;justify-content:space-between;gap:8px;padding:5px 0;border-top:1px solid var(--line);font-size:13px;cursor:pointer}
.mini div.r:first-of-type{border-top:0}
.tools{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px}
input[type=search]{flex:1;min-width:200px;background:var(--surface);color:var(--ink);border:1px solid var(--line);border-radius:10px;padding:9px 12px;font:inherit}
.tab{background:var(--chip);color:var(--ink);border:0;border-radius:10px;padding:9px 14px;font:inherit;cursor:pointer}
.tab[aria-pressed=true]{background:var(--ink);color:var(--bg)}
.tab[disabled]{opacity:.4;cursor:default}
:focus-visible{outline:2px solid var(--brand);outline-offset:2px}
.via{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:10px;font-size:13px;color:var(--mute)}
.via .tab{padding:6px 12px;font-size:13px}
.tablewrap{overflow-x:auto;background:var(--surface);border:1px solid var(--line);border-radius:12px}
table{width:100%;border-collapse:collapse;min-width:780px}
th,td{padding:10px 12px;text-align:right;border-bottom:1px solid var(--line);white-space:nowrap}
th{font-size:12px;color:var(--mute);font-weight:600;cursor:pointer;user-select:none}
th:nth-child(-n+3),td:nth-child(-n+3){text-align:left}
tr:last-child td{border-bottom:0}tbody tr:hover{background:var(--chip)}
.star{background:none;border:0;cursor:pointer;font-size:17px;color:var(--mute);padding:0}.star.on{color:#f5a524}
.nm{cursor:pointer;max-width:260px;overflow:hidden;text-overflow:ellipsis}.nm b{display:block;overflow:hidden;text-overflow:ellipsis}.nm small{color:var(--mute)}
.up{color:var(--up)}.dn{color:var(--down)}.na{color:var(--mute)}
.go{background:var(--brand);color:#fff;border:0;border-radius:8px;padding:6px 12px;font:inherit;font-size:13px;cursor:pointer}
.go.off{background:var(--chip);color:var(--mute)}
.pager{display:flex;justify-content:center;align-items:center;gap:12px;margin:14px 0}
h2{font-size:17px;margin:28px 0 4px}
.brokers{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-top:12px}
.bk h3{margin:0 0 2px;font-size:15px}.bk p{margin:0 0 12px;color:var(--mute);font-size:13px}
.note{color:var(--mute);font-size:12px;margin-top:16px}
dialog{border:1px solid var(--line);border-radius:14px;background:var(--surface);color:var(--ink);padding:18px;width:min(560px,94vw)}
dialog::backdrop{background:rgba(0,0,0,.45)}
.dh{display:flex;justify-content:space-between;align-items:flex-start;gap:10px}
.kv{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin:14px 0}
.kv span{display:block;color:var(--mute);font-size:12px}
.rng{position:relative;height:8px;background:var(--line);border-radius:99px;margin:8px 0 4px}
.rng i{position:absolute;top:-3px;width:4px;height:14px;background:var(--brand);border-radius:2px}
.err{background:var(--chip);border-radius:10px;padding:14px;margin:12px 0}
</style>
</head>
<body>
<div class="wrap">
<header>
 <div><h1 id="title">NSE Stocks</h1><div class="sub" id="status">Loading…</div></div>
 <button class="tab" id="theme" type="button">Theme</button>
</header>
<div class="disc" id="disc"></div>
<div id="err"></div>
<div class="stats" id="stats"></div>
<div class="bar" id="bar"></div>
<div class="mini" id="mini"></div>

<div class="tools">
 <input type="search" id="q" placeholder="Search all NSE stocks by name or symbol" aria-label="Search stocks">
 <button class="tab" id="tActive" aria-pressed="true" type="button">By traded value</button>
 <button class="tab" id="tVol" aria-pressed="false" type="button">By volume</button>
 <button class="tab" id="tGain" aria-pressed="false" type="button">Top gainers</button>
 <button class="tab" id="tLose" aria-pressed="false" type="button">Top losers</button>
 <button class="tab" id="tWatch" aria-pressed="false" type="button">Watchlist</button>
</div>
<div class="via" id="via"></div>

<div class="tablewrap"><table>
<thead><tr>
 <th style="width:34px"></th><th>#</th><th data-k="name">Stock</th>
 <th data-k="price">Price (₹)</th><th data-k="d1">1D</th><th data-k="volume">Volume</th>
 <th data-k="turnoverCr">Traded value</th><th data-k="delivPct">Delivery %</th><th></th>
</tr></thead><tbody id="rows"></tbody></table></div>
<div class="pager"><button class="tab" id="prev" type="button">Previous</button><span id="pg"></span><button class="tab" id="next" type="button">Next</button></div>

<h2>Open a trading account</h2>
<div class="sub">Pick a broker to start. Each button opens that broker's sign-up through our referral link.</div>
<div class="brokers" id="brokers"></div>
<p class="note">Prices are NSE end-of-day closing data, not live. Gainers and losers only include stocks that traded at least ₹1 crore that day, so tiny illiquid stocks do not crowd the list. Check prices in your broker app before you trade.</p>
</div>

<dialog id="dlg">
 <div class="dh"><div><h2 id="dName" style="margin:0"></h2><div class="sub" id="dSub"></div></div><button class="tab" id="dClose" type="button">Close</button></div>
 <div class="kv" id="dKv"></div>
 <div class="sub">Day range</div><div class="rng" id="dRng"></div>
 <div class="sub" style="display:flex;justify-content:space-between"><span id="dLow"></span><span id="dHigh"></span></div>
 <div style="margin-top:14px" id="dTrade"></div>
 <p class="note">Price history charts will appear here once the daily data job has collected more days.</p>
</dialog>

<script>
const $=id=>document.getElementById(id);
let cfg={brokers:[]},D={stocks:[]},sel=0,mode="active",sortK="turnoverCr",dir=-1,page=1,watch=new Set();
const PER=50;
try{watch=new Set(JSON.parse(localStorage.getItem("w")||"[]"));sel=+(localStorage.getItem("s")||0)}catch(e){}
const save=()=>{try{localStorage.setItem("w",JSON.stringify([...watch]));localStorage.setItem("s",sel)}catch(e){}};
const dash='<span class="na">—</span>';
const pct=n=>n==null?dash:'<span class="'+(n>=0?"up":"dn")+'">'+(n>=0?"▲ ":"▼ ")+Math.abs(n).toFixed(2)+"%</span>";
const inr=(n,d=2)=>n==null?dash:n.toLocaleString("en-IN",{maximumFractionDigits:d});
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const broker=()=>cfg.brokers[sel]||{};
const liquid=x=>(x.turnoverCr||0)>=1;

function list(){
 const q=$("q").value.trim().toLowerCase();
 let a=D.stocks;
 if(mode==="watch")a=a.filter(x=>watch.has(x.sym));
 if(mode==="gain")a=a.filter(x=>x.d1!=null&&x.d1>0&&liquid(x));
 if(mode==="lose")a=a.filter(x=>x.d1!=null&&x.d1<0&&liquid(x));
 if(q)a=a.filter(x=>x.sym.toLowerCase().includes(q)||x.name.toLowerCase().includes(q));
 return a.slice().sort((x,y)=>{const u=x[sortK],v=y[sortK];if(u==null&&v==null)return 0;if(u==null)return 1;if(v==null)return -1;return (u>v?1:u<v?-1:0)*dir});
}
function render(){
 const a=list(),pages=Math.max(1,Math.ceil(a.length/PER));
 if(page>pages)page=pages;
 const start=(page-1)*PER,slice=a.slice(start,start+PER);
 $("rows").innerHTML=slice.length?slice.map((x,i)=>'<tr>'+
 '<td><button class="star '+(watch.has(x.sym)?"on":"")+'" data-s="'+esc(x.sym)+'" aria-label="Watchlist '+esc(x.sym)+'">'+(watch.has(x.sym)?"★":"☆")+'</button></td>'+
 '<td>'+(start+i+1)+'</td><td class="nm" data-d="'+esc(x.sym)+'"><b>'+esc(x.name)+'</b><small>'+esc(x.sym)+'</small></td>'+
 '<td>'+inr(x.price)+'</td><td>'+pct(x.d1)+'</td><td>'+inr(x.volume,0)+'</td><td>'+(x.turnoverCr==null?dash:"₹"+inr(x.turnoverCr)+" Cr")+'</td>'+
 '<td>'+(x.delivPct==null?dash:inr(x.delivPct,1)+"%")+'</td>'+
 '<td><button class="go '+(broker().referralUrl?"":"off")+'" data-t="1" type="button">Trade</button></td></tr>').join("")
 :'<tr><td colspan="9" style="text-align:center;color:var(--mute);padding:28px">'+(mode==="watch"?"Your watchlist is empty. Tap the star next to any stock.":"No stocks match your search.")+'</td></tr>';
 $("pg").textContent="Page "+page+" of "+pages+" · "+a.length.toLocaleString("en-IN")+" stocks";
 $("prev").disabled=page<=1;$("next").disabled=page>=pages;
}
function summary(){
 const s=D.stocks,up=s.filter(x=>x.d1>0).length,dn=s.filter(x=>x.d1<0).length,flat=s.length-up-dn;
 const tv=s.reduce((t,x)=>t+(x.turnoverCr||0),0);
 $("stats").innerHTML=[["Stocks listed",s.length.toLocaleString("en-IN")],["Advancing",'<span class="up">'+up+"</span>"],["Declining",'<span class="dn">'+dn+"</span>"],["Total traded value","₹"+inr(tv,0)+" Cr"]].map(c=>'<div class="card"><span>'+c[0]+"</span><b>"+c[1]+"</b></div>").join("");
 const t=s.length||1;
 $("bar").innerHTML='<i style="width:'+up/t*100+'%;background:var(--up)"></i><i style="width:'+flat/t*100+'%;background:var(--line)"></i><i style="width:'+dn/t*100+'%;background:var(--down)"></i>';
 const top=(f,sf,n)=>s.filter(f).sort(sf).slice(0,n);
 const g=top(x=>x.d1!=null&&x.d1>0&&liquid(x),(a,b)=>b.d1-a.d1,5);
 const l=top(x=>x.d1!=null&&x.d1<0&&liquid(x),(a,b)=>a.d1-b.d1,5);
 const v=top(x=>x.volume!=null,(a,b)=>b.volume-a.volume,5);
 const box=(t,arr,f)=>'<div class="card"><h3>'+t+"</h3>"+arr.map(x=>'<div class="r" data-d="'+esc(x.sym)+'"><span>'+esc(x.sym)+"</span><span>"+f(x)+"</span></div>").join("")+"</div>";
 $("mini").innerHTML=box("🔥 Top gainers",g,x=>pct(x.d1))+box("📉 Top losers",l,x=>pct(x.d1))+box("📊 Most traded (volume)",v,x=>inr(x.volume,0));
}
function renderBrokers(){
 $("via").innerHTML=cfg.brokers.length?"Trade with: "+cfg.brokers.map((b,i)=>'<button class="tab" data-pick="'+i+'" aria-pressed="'+(i===sel)+'" type="button">'+esc(b.name)+"</button>").join(""):"";
 $("brokers").innerHTML=cfg.brokers.map((b,i)=>'<div class="card bk"><h3>'+esc(b.name)+"</h3><p>"+esc(b.tagline||"")+"</p>"+
 '<button class="go '+(b.referralUrl?"":"off")+'" data-open="'+i+'" type="button">'+(b.referralUrl?"Open account":"Referral link not set")+"</button></div>").join("");
}
function openDetail(sym){
 const x=D.stocks.find(s=>s.sym===sym);if(!x)return;
 $("dName").textContent=x.name;$("dSub").textContent=x.sym+" · NSE · series "+x.series;
 $("dKv").innerHTML=[["Close","₹"+inr(x.price)],["1D change",pct(x.d1)],["Previous close","₹"+inr(x.prev)],["Open","₹"+inr(x.open)],["Volume",inr(x.volume,0)],["Traded value",x.turnoverCr==null?"—":"₹"+inr(x.turnoverCr)+" Cr"],["Delivery",x.delivPct==null?"—":inr(x.delivPct,1)+"%"]].map(k=>"<div><span>"+k[0]+"</span><b>"+k[1]+"</b></div>").join("");
 const lo=x.low,hi=x.high,pos=(hi>lo&&x.price!=null)?(x.price-lo)/(hi-lo)*100:50;
 $("dRng").innerHTML='<i style="left:calc('+pos+'% - 2px)"></i>';
 $("dLow").textContent="Low ₹"+inr(lo);$("dHigh").textContent="High ₹"+inr(hi);
 $("dTrade").innerHTML='<button class="go '+(broker().referralUrl?"":"off")+'" data-t="1" type="button">Trade with '+esc(broker().name||"a broker")+"</button>";
 if(!$("dlg").open)$("dlg").showModal();
}
function goBroker(b){if(b&&b.referralUrl)window.open(b.referralUrl,"_blank","noopener");else alert("Set this broker's referral link in config.json first.")}

document.addEventListener("click",e=>{
 const t=e.target,d=t.closest("[data-d]"),th=t.closest("th[data-k]");
 if(t.dataset.s){watch.has(t.dataset.s)?watch.delete(t.dataset.s):watch.add(t.dataset.s);save();render()}
 else if(t.dataset.t)goBroker(broker());
 else if(t.dataset.open)goBroker(cfg.brokers[+t.dataset.open]);
 else if(t.dataset.pick){sel=+t.dataset.pick;save();renderBrokers();render()}
 else if(th){const k=th.dataset.k;dir=sortK===k?-dir:(k==="name"?1:-1);sortK=k;page=1;render()}
 else if(d)openDetail(d.dataset.d);
});
$("q").addEventListener("input",()=>{page=1;render()});
$("prev").onclick=()=>{page--;render();window.scrollTo({top:$("rows").offsetTop-200,behavior:"smooth"})};
$("next").onclick=()=>{page++;render();window.scrollTo({top:$("rows").offsetTop-200,behavior:"smooth"})};
const tabs={tActive:["active","turnoverCr",-1],tVol:["vol","volume",-1],tGain:["gain","d1",-1],tLose:["lose","d1",1],tWatch:["watch","turnoverCr",-1]};
Object.keys(tabs).forEach(id=>$(id).onclick=()=>{Object.keys(tabs).forEach(i=>$(i).setAttribute("aria-pressed",i===id));[mode,sortK,dir]=tabs[id];page=1;render()});
$("theme").onclick=()=>{const r=document.documentElement,d=getComputedStyle(r).getPropertyValue("--bg").trim()==="#0f1318";r.setAttribute("data-theme",d?"light":"dark")};
$("dClose").onclick=()=>$("dlg").close();

(async()=>{
 try{cfg=await (await fetch("/api/config")).json();$("title").textContent=cfg.siteName||"NSE Stocks";$("disc").textContent=cfg.disclosure||""}catch(e){}
 if(sel>=cfg.brokers.length)sel=0;
 renderBrokers();
 try{
  const r=await fetch("/data/stocks.json");if(!r.ok)throw 0;D=await r.json();
  $("status").textContent="All NSE stocks · End-of-day · Trade date "+D.tradeDate+" · "+D.count.toLocaleString("en-IN")+" stocks";
  summary();render();
 }catch(e){
  $("status").textContent="Data not ready";
  $("err").innerHTML='<div class="err"><b>The stock data file is not ready yet.</b><br>In GitHub open the Actions tab, run the job called Update data, wait for the green tick, then refresh this page after a few minutes.</div>';
 }
})();
</script>
</body>
</html>
