
// Basic demo handlers (all work fully offline)
function alertFeature(msg){ alert(msg); }

async function randomQuote(){
  const res = await fetch('features/quotes.json');
  const data = await res.json();
  const q = data[Math.floor(Math.random()*data.length)];
  document.getElementById('quote-box').innerText = q.text + ' — ' + q.anime;
}

function countdown(targetISO){
  const t = new Date(targetISO).getTime();
  const el = document.getElementById('countdown');
  function tick(){
    const now = Date.now();
    const diff = Math.max(0, t-now);
    const d = Math.floor(diff/86400000);
    const h = Math.floor(diff%86400000/3600000);
    const m = Math.floor(diff%3600000/60000);
    const s = Math.floor(diff%60000/1000);
    el.textContent = d+'d '+h+'h '+m+'m '+s+'s';
    if(diff>0) requestAnimationFrame(tick);
  }
  tick();
}
