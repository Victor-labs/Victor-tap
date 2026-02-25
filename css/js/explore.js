/* ═══════════════════════════════════════
   EXPLORE SYSTEM — Victor Coin v3
   Map · Vault · Artifacts · Particles
═══════════════════════════════════════ */

/* Artifact definitions — with bonuses */
var ARTIFACTS = [
  {id:'vring',  name:'Victor Ring',  ico:'💍', rarity:'Legendary', desc:'Forged in the fires of Victor\'s vault. Worn only by true champions.', vkBonus:500000,  diaBonus:0},
  {id:'eagle',  name:'Eagle',        ico:'🦅', rarity:'Epic',      desc:'The spirit of the eagle — fierce, free, untamed. Grants foresight to its bearer.', vkBonus:0,       diaBonus:250},
  {id:'carpet', name:'Magic Carpet', ico:'🪄', rarity:'Rare',      desc:'Woven from starlight and ancient silk. Carries its owner beyond the horizon.', vkBonus:200000,  diaBonus:100},
  {id:'golem',  name:'Golem',        ico:'🗿', rarity:'Epic',      desc:'A stone colossus awakened by ancient magic. Unbreakable, unmovable, unstoppable.', vkBonus:0,       diaBonus:500},
  {id:'gmask',  name:'Goblin Mask',  ico:'👺', rarity:'Uncommon',  desc:'Crafted by mischievous goblins underground. Grants cunning beyond measure.', vkBonus:100000,  diaBonus:50},
  {id:'smask',  name:'Sunny Mask',   ico:'☀️', rarity:'Rare',      desc:'A golden mask radiating warmth and light. Only the pure of heart can bear its glow.', vkBonus:150000,  diaBonus:75},
  {id:'dboots', name:'Demon Boots',  ico:'👢', rarity:'Epic',      desc:'Forged in the underworld. Each step leaves a scorched mark on the earth.', vkBonus:0,       diaBonus:400},
  {id:'gspoon', name:'Golden Spoon', ico:'🥄', rarity:'Legendary', desc:'Solid gold, impossibly rare. Used to stir the very first pot of VK coins.', vkBonus:1000000, diaBonus:1000}
];

/* Rarity drop weights (1–2% total) */
var RARITY_CHANCE = {
  'Legendary': 0.005,   // 0.5%
  'Epic':      0.008,   // 0.8%
  'Rare':      0.012,   // 1.2%
  'Uncommon':  0.018    // 1.8%
};

/* Map locations */
var MAP_LOCS = [
  {id:0, name:"Victor's Tomb",    x:20, y:16, emoji:'🏛️'},
  {id:1, name:'Crystal Cavern',   x:63, y:10, emoji:'💎'},
  {id:2, name:'Forgotten Ruins',  x:80, y:33, emoji:'🏚️'},
  {id:3, name:'Shadow Forest',    x:13, y:54, emoji:'🌲'},
  {id:4, name:"Dragon's Peak",    x:48, y:42, emoji:'🐉'},
  {id:5, name:'Ancient Bazaar',   x:36, y:70, emoji:'🏪'},
  {id:6, name:'Storm Citadel',    x:74, y:63, emoji:'⚡'},
  {id:7, name:'Abyssal Depths',   x:87, y:80, emoji:'🌊'}
];

var EX_DURATION = 3 * 60 * 60 * 1000; // 3 hours

/* Init explore state */
function initExplore() {
  if (!G.ex) {
    G.ex = {
      exploreCount:0, exploreCost:5000,
      activeLocId:null, exploreStart:0, exploring:false,
      locs:[false,false,false,false,false,false,false,false],
      vault:[]
    };
  } else {
    if (!G.ex.locs)  G.ex.locs  = [false,false,false,false,false,false,false,false];
    if (!G.ex.vault) G.ex.vault = [];
    if (typeof G.ex.exploreCount==='undefined') G.ex.exploreCount=0;
    if (typeof G.ex.exploreCost==='undefined')  G.ex.exploreCost=5000;
    if (typeof G.ex.exploring==='undefined')    G.ex.exploring=false;
  }
}

/* ── OVERLAY OPEN / CLOSE ── */
function openExplore() {
  initExplore();
  document.getElementById('exploreOverlay').style.display='flex';
  exNav('explore');
}

function closeExplore() {
  document.getElementById('exploreOverlay').style.display='none';
  cancelAnimationFrame(_artPAnim);
  clearInterval(_exTimer);
}

/* ── INNER NAV ── */
var _exTab='explore';
function exNav(tab) {
  _exTab = tab;
  ['explore','vault','artifacts'].forEach(function(t) {
    var btn=document.getElementById('exnav-'+t);
    var sec=document.getElementById('expg-'+t);
    if(btn) btn.classList.toggle('exnav-on', t===tab);
    if(sec) sec.style.display=(t===tab)?'block':'none';
  });
  if(tab==='explore')   renderExploreMap();
  if(tab==='vault')     renderVault();
  if(tab==='artifacts') renderArtifacts();
}

/* ── MAP RENDER ── */
var _selLoc = null;
function renderExploreMap() {
  st('exCost', fm(G.ex.exploreCost)+' VK');
  st('exCount', G.ex.exploreCount+' explorations done');
  var mapEl=document.getElementById('exMap');
  if(!mapEl) return;

  if(G.ex.exploring) { renderExploreProgress(); return; }

  var pins='';
  MAP_LOCS.forEach(function(loc) {
    var un=G.ex.locs[loc.id];
    pins+='<div class="exppin '+(un?'exppin-un':'exppin-lk')+'" '
      +'style="left:'+loc.x+'%;top:'+loc.y+'%;" '
      +'onclick="selectLoc('+loc.id+')">'
      +'<span class="exppin-ico">'+loc.emoji+'</span>'
      +'<span class="exppin-nm">'+loc.name+'</span>'
      +'</div>';
  });
  mapEl.innerHTML = pins;
  renderSelectedLoc();
}

function selectLoc(id) {
  _selLoc=id;
  renderSelectedLoc();
  // Highlight selected pin
  document.querySelectorAll('.exppin').forEach(function(p,i){
    p.classList.toggle('exppin-sel', i===id);
  });
}

function renderSelectedLoc() {
  var el=document.getElementById('exLocInfo');
  if(!el) return;
  if(_selLoc===null) {
    el.innerHTML='<div class="exhint">👆 Tap a location on the map to explore it</div>';
    return;
  }
  var loc=MAP_LOCS[_selLoc];
  var un=G.ex.locs[_selLoc];
  var cost=G.ex.exploreCost;
  var can=G.vk>=cost;
  el.innerHTML=''
    +'<div class="exloccard">'
    +'<div class="exlocico">'+loc.emoji+'</div>'
    +'<div class="exloci"><div class="exlocn">'+loc.name+'</div>'
    +'<div class="exlocs">'+(un?'✅ Explored before':'🔒 Unexplored territory')+'</div></div>'
    +'</div>'
    +'<button class="exbtn-go'+(can?'':' exbtn-dis')+'" '+(G.ex.exploring?'disabled':'')+' onclick="startExplore('+_selLoc+')">'
    +'🗺️ EXPLORE — '+fm(cost)+' VK</button>'
    +(!can?'<div class="exneed">Need '+fm(cost-G.vk)+' more VK</div>':'')
    +'<div class="exwarn">⚠️ Takes 3 hours · Artifact not guaranteed · Very rare</div>';
}

/* ── START EXPLORE ── */
function startExplore(locId) {
  if(G.ex.exploring){toast('Already exploring!','#FF9F0A');return;}
  var cost=G.ex.exploreCost;
  if(G.vk<cost){toast('Need '+fm(cost)+' VK','#FF453A');return;}
  G.vk-=cost;
  G.ex.exploring=true;
  G.ex.activeLocId=locId;
  G.ex.exploreStart=Date.now();
  G.ex.exploreCount++;
  G.ex.exploreCost+=10000;
  G.ex.locs[locId]=true;
  sv(); renderAll();
  renderExploreProgress();
  startExploreTimer();
  toast('🗺️ Exploration started! Returns in 3 hours.','#5AC8FA');
}

/* ── TIMER ── */
var _exTimer=null;
function startExploreTimer() {
  clearInterval(_exTimer);
  _exTimer=setInterval(function() {
    if(!G.ex||!G.ex.exploring){clearInterval(_exTimer);return;}
    var elapsed=Date.now()-G.ex.exploreStart;
    var pct=Math.min(100,(elapsed/EX_DURATION)*100);
    var bar=document.getElementById('exProgressBar');
    if(bar) bar.style.width=pct+'%';
    var tel=document.getElementById('exTimeLeft');
    if(tel){
      var rem=Math.max(0,EX_DURATION-elapsed);
      tel.textContent=rem>0?fmT(Math.ceil(rem/1000))+' remaining':'Revealing results...';
    }
    if(elapsed>=EX_DURATION){clearInterval(_exTimer);finishExplore();}
  },1000);
}

/* ── FINISH EXPLORE ── */
function finishExplore() {
  if(!G.ex||!G.ex.exploring) return;
  var unowned=ARTIFACTS.filter(function(a){return G.ex.vault.indexOf(a.id)===-1;});
  var earned=null;

  // Roll per unowned artifact using its rarity chance
  for(var i=0;i<unowned.length;i++){
    var chance=RARITY_CHANCE[unowned[i].rarity]||0.01;
    if(Math.random()<chance){earned=unowned[i];break;}
  }

  if(earned){
    G.ex.vault.push(earned.id);
    // Apply bonuses
    if(earned.vkBonus>0)  G.vk  += earned.vkBonus;
    if(earned.diaBonus>0) G.dia += earned.diaBonus;
  }

  var prevLoc=G.ex.activeLocId;
  G.ex.exploring=false;
  G.ex.activeLocId=null;
  sv(); renderAll();
  showExploreResult(!!earned, earned, prevLoc);
  renderExploreMap();
}

function showExploreResult(got, art, locId) {
  var loc=MAP_LOCS[locId]||MAP_LOCS[0];
  var ov=document.createElement('div');
  ov.className='mov';
  if(got&&art){
    var bLine='';
    if(art.vkBonus>0&&art.diaBonus>0) bLine='<div style="color:var(--gold);font-size:0.78rem;font-weight:700;margin-bottom:8px;">+'+fm(art.vkBonus)+' VK &amp; +'+art.diaBonus+' 💎 deposited!</div>';
    else if(art.vkBonus>0) bLine='<div style="color:var(--gold);font-size:0.78rem;font-weight:700;margin-bottom:8px;">+'+fm(art.vkBonus)+' VK deposited into your wallet!</div>';
    else if(art.diaBonus>0) bLine='<div style="color:var(--teal);font-size:0.78rem;font-weight:700;margin-bottom:8px;">+'+art.diaBonus+' 💎 deposited into your vault!</div>';
    ov.innerHTML=''
      +'<div class="mb" style="border-color:rgba(255,214,10,0.5);box-shadow:0 0 60px rgba(255,214,10,0.2),0 40px 100px rgba(0,0,0,0.8);">'
      +'<div style="font-size:3.8rem;margin-bottom:10px;animation:artifactReveal 0.7s cubic-bezier(0.34,1.56,0.64,1);">'+art.ico+'</div>'
      +'<div style="font-size:0.65rem;letter-spacing:3px;color:var(--gold);font-weight:700;margin-bottom:4px;">ARTIFACT DISCOVERED</div>'
      +'<div style="font-size:1.2rem;font-weight:800;color:var(--text);margin-bottom:4px;">'+art.name+'</div>'
      +'<div class="rarity-'+art.rarity.toLowerCase()+'" style="font-size:0.65rem;font-weight:700;letter-spacing:1.5px;margin-bottom:10px;">✨ '+art.rarity.toUpperCase()+'</div>'
      +'<div style="font-size:0.72rem;color:var(--text2);margin-bottom:12px;font-style:italic;">'+art.desc+'</div>'
      +bLine
      +'<div class="mbts">'
      +'<button class="mok" onclick="this.closest(\'.mov\').remove();exNav(\'vault\')">VIEW VAULT 🏛️</button>'
      +'<button class="mcan" onclick="this.closest(\'.mov\').remove()">Continue</button>'
      +'</div></div>';
  } else {
    ov.innerHTML=''
      +'<div class="mb">'
      +'<span class="mico">🗺️</span>'
      +'<div class="mttl">Exploration Complete</div>'
      +'<div class="mbdy">You searched <strong>'+loc.name+'</strong> from top to bottom...<br/><br/>'
      +'The land kept its secrets this time.<br/><br/>'
      +'<span style="color:var(--text3);font-size:0.68rem;">Next cost: '+fm(G.ex.exploreCost)+' VK · Keep hunting.</span></div>'
      +'<div class="mbts"><button class="mok" onclick="this.closest(\'.mov\').remove()">Keep Hunting</button></div>'
      +'</div>';
  }
  document.body.appendChild(ov);
}

/* ── PROGRESS DISPLAY ── */
function renderExploreProgress() {
  var mapEl=document.getElementById('exMap');
  if(!mapEl) return;
  var elapsed=Date.now()-G.ex.exploreStart;
  var pct=Math.min(100,(elapsed/EX_DURATION)*100);
  var rem=Math.max(0,EX_DURATION-elapsed);
  var loc=MAP_LOCS[G.ex.activeLocId];
  mapEl.innerHTML=''
    +'<div class="exprogwrap">'
    +'<div style="font-size:3rem;margin-bottom:12px;animation:maskFloat 3s ease-in-out infinite;">'+(loc?loc.emoji:'🗺️')+'</div>'
    +'<div style="font-size:0.86rem;font-weight:700;color:var(--text);margin-bottom:4px;">Exploring '+(loc?loc.name:'...')+'</div>'
    +'<div style="font-size:0.68rem;color:var(--text2);margin-bottom:18px;">Searching every corner for hidden artifacts...</div>'
    +'<div class="exprogtrack"><div class="exprogbar" id="exProgressBar" style="width:'+pct+'%;"></div></div>'
    +'<div id="exTimeLeft" style="font-size:0.72rem;color:var(--teal);margin-top:10px;font-weight:600;">'+(rem>0?fmT(Math.ceil(rem/1000))+' remaining':'Revealing...')+'</div>'
    +'<div style="font-size:0.6rem;color:var(--text3);margin-top:8px;">🔒 Cannot explore elsewhere until this completes</div>'
    +'</div>';
  var li=document.getElementById('exLocInfo');
  if(li) li.innerHTML='';
  if(rem>0) startExploreTimer();
  else setTimeout(finishExplore,500);
}

/* ── VAULT ── */
function renderVault() {
  var el=document.getElementById('expg-vault');
  if(!el) return;
  var vault=G.ex.vault||[];
  if(vault.length===0){
    el.innerHTML=''
      +'<div class="vaultempty">'
      +'<div style="font-size:3.5rem;margin-bottom:14px;opacity:0.25;filter:grayscale(1);">🏛️</div>'
      +'<div style="font-size:0.86rem;font-weight:600;color:var(--text2);">Your vault is empty</div>'
      +'<div style="font-size:0.72rem;color:var(--text3);margin-top:8px;line-height:1.7;">Explore the map to discover artifacts.<br/>They are extremely rare — stay persistent.</div>'
      +'</div>';
    return;
  }
  var h='<div class="vaultgrid">';
  vault.forEach(function(id){
    var art=ARTIFACTS.find(function(a){return a.id===id;});
    if(!art) return;
    h+=''
      +'<div class="vaultitem">'
      +'<div class="vaultglass"><div class="vaultshine"></div><div class="vaultart-ico">'+art.ico+'</div></div>'
      +'<div class="vaultart-n">'+art.name+'</div>'
      +'<div class="vaultart-r rarity-'+art.rarity.toLowerCase()+'">'+art.rarity+'</div>'
      +(art.vkBonus>0?'<div class="vaultbonus tg">+'+fm(art.vkBonus)+' VK</div>':'')
      +(art.diaBonus>0?'<div class="vaultbonus td">+'+art.diaBonus+' 💎</div>':'')
      +'</div>';
  });
  h+='</div><div style="text-align:center;margin-top:18px;font-size:0.65rem;color:var(--text3);">'+vault.length+' / '+ARTIFACTS.length+' artifacts collected</div>';
  el.innerHTML=h;
}

/* ── ARTIFACTS PAGE ── */
function renderArtifacts() {
  var el=document.getElementById('expg-artifacts');
  if(!el) return;
  var vault=G.ex.vault||[];
  var h='<canvas id="artParticleCanvas" class="artparticlecv"></canvas><div class="artgrid">';
  ARTIFACTS.forEach(function(art){
    var owned=vault.indexOf(art.id)!==-1;
    h+=''
      +'<div class="artcase '+(owned?'artcase-owned':'artcase-locked')+'">'
      +'<div class="artglass-case">'
      +'<div class="artglass-shine"></div>'
      +'<div class="artglass-ref"></div>'
      +'<div class="artcase-ico '+(owned?'':'artcase-hidden')+'">'+art.ico+'</div>'
      +(!owned?'<div class="artcase-lock">🔒</div>':'')
      +'</div>'
      +'<div class="artcase-name">'+art.name+'</div>'
      +'<div class="artcase-rarity rarity-'+art.rarity.toLowerCase()+'">'+art.rarity+'</div>'
      +(owned
        ?'<div class="artcase-owned-badge">✅ OWNED</div>'
          +(art.vkBonus>0?'<div class="artcase-bonus tg">+'+fm(art.vkBonus)+' VK</div>':'')
          +(art.diaBonus>0?'<div class="artcase-bonus td">+'+art.diaBonus+' 💎</div>':'')
        :'<div class="artcase-mystery">??? · Find it to reveal</div>')
      +'</div>';
  });
  h+='</div>';
  el.innerHTML=h;
  setTimeout(startArtParticles,80);
}

/* ── BLUE GLITTER PARTICLES ── */
var _artPAnim=null;
function startArtParticles(){
  var cv=document.getElementById('artParticleCanvas');
  if(!cv) return;
  var cx=cv.getContext('2d');
  var W,H,pts=[];

  function resize(){
    var wrap=document.getElementById('expg-artifacts');
    if(!wrap) return;
    W=cv.width=wrap.offsetWidth||window.innerWidth;
    H=cv.height=Math.max(wrap.offsetHeight,400);
  }
  resize();

  for(var i=0;i<120;i++){
    pts.push({
      x:Math.random()*W, y:Math.random()*H,
      r:0.4+Math.random()*2.2,
      vx:(Math.random()-0.5)*0.4,
      vy:-0.2-Math.random()*0.7,
      ph:Math.random()*6.28,
      spd:0.015+Math.random()*0.035,
      hue:190+Math.floor(Math.random()*50),
      sparkle:Math.random()>0.6
    });
  }

  cancelAnimationFrame(_artPAnim);
  function draw(){
    if(!document.getElementById('artParticleCanvas')){cancelAnimationFrame(_artPAnim);return;}
    _artPAnim=requestAnimationFrame(draw);
    cx.clearRect(0,0,W,H);
    pts.forEach(function(p){
      p.ph+=p.spd; p.x+=p.vx; p.y+=p.vy;
      if(p.y<-10){p.y=H+5;p.x=Math.random()*W;}
      if(p.x<-10) p.x=W+5;
      if(p.x>W+10) p.x=-5;
      var op=0.25+0.75*Math.abs(Math.sin(p.ph));
      var shimmer=Math.sin(p.ph*4);
      if(shimmer>0.6){
        cx.fillStyle='rgba(220,240,255,'+(op*0.95)+')';
      } else {
        cx.fillStyle='hsla('+p.hue+',100%,72%,'+op+')';
      }
      cx.beginPath();cx.arc(p.x,p.y,p.r,0,6.28);cx.fill();
      if(p.sparkle&&p.r>1.4){
        var sl=p.r*2.5;
        cx.strokeStyle='rgba(100,210,255,'+(op*0.45)+')';
        cx.lineWidth=0.6;
        cx.beginPath();
        cx.moveTo(p.x-sl,p.y);cx.lineTo(p.x+sl,p.y);
        cx.moveTo(p.x,p.y-sl);cx.lineTo(p.x,p.y+sl);
        cx.stroke();
      }
    });
  }
  draw();
}

/* ── TICK (called from main game tick) ── */
function tickExplore(){
  if(G.ex&&G.ex.exploring){
    var elapsed=Date.now()-G.ex.exploreStart;
    if(elapsed>=EX_DURATION) finishExplore();
  }
}

