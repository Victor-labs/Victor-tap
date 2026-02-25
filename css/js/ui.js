var _$x=function(){var _a=0x1,_b=0x2;return _a+_b===0x3;};
var PG={game:'⚡ VICTOR COIN',shop:'\x1f6d2\x20\x53\x48\x4f\x50',factory:'\x1f3ed\x20\x46\x41\x43\x54\x4f\x52\x59',diamonds:'\x1f48e\x20\x44\x49\x41\x4d\x4f\x4e\x44\x53',daily:'\x1f381\x20\x44\x41\x49\x4c\x59',miner:'\x1f916\x20\x41\x55\x54\x4f\x20\x4d\x49\x4e\x45\x52',boosts:'⚡ BOOSTS',enigma:'🎭 ENIGMA',ach:'\x1f3c5\x20\x41\x43\x48\x49\x45\x56\x45\x4d\x45\x4e\x54\x53',ranks:'\x1f3c6\x20\x52\x41\x4e\x4b\x53',cashout:'\x1f4b8\x20\x43\x41\x53\x48\x20\x4f\x55\x54',player:'\x1f464\x20\x50\x4c\x41\x59\x45\x52',about:'\x2139\xfe0f\x20\x41\x42\x4f\x55\x54',contact:'📞 CONTACT'};
function go(id,el){
  document.querySelectorAll('\x2e\x73\x65\x63').forEach(function(s){s.classList.remove('on');});
  document.querySelectorAll('.si').forEach(function(s){s.classList.remove('on');});
  var s=document.getElementById('pg-'+id);if(s)s.classList.add('on');
  if(el)el.classList.add('on');else{var si=document.getElementById('si-'+id);if(si)si.classList.add('on');}
  st('\x6e\x74\x69\x74\x6c\x65',PG[id]||'⚡ VICTOR COIN');
  closeSb();
  if(id==='ach')renderAch();
  if(id==='\x72\x61\x6e\x6b\x73')renderRanks();
  if(id==='\x63\x61\x73\x68\x6f\x75\x74')renderCO();
  if(id==='\x70\x6c\x61\x79\x65\x72')renderPI();
  if(id==='\x64\x69\x61\x6d\x6f\x6e\x64\x73')updDia();
  if(id==='\x64\x61\x69\x6c\x79')updDaily();
  if(id==='\x6d\x69\x6e\x65\x72')updMiner();
  if(id==='boosts')renderBoosts();
  if(id==='\x65\x6e\x69\x67\x6d\x61')renderEnigma();
  renderAll();
}
function togSb(){var sb=document.getElementById('sb'),ov=document.getElementById('\x73\x62\x6f\x76');var o=sb.classList.toggle('\x6f\x70\x65\x6e');ov.classList.toggle('\x73\x68\x6f\x77',o);}
function closeSb(){document.getElementById('sb').classList.remove('\x6f\x70\x65\x6e');document.getElementById('\x73\x62\x6f\x76').classList.remove('\x73\x68\x6f\x77');}

function doLogin(){
  var n=(document.getElementById('\x6c\x6e\x61\x6d\x65').value||'').trim();
  var e=(document.getElementById('\x6c\x65\x6d\x61\x69\x6c').value||'').trim();
  if(!n||!e){toast('Fill in all fields','\x23\x66\x66\x33\x64\x35\x61');return;}
  if(!e.includes('@')){toast('\x49\x6e\x76\x61\x6c\x69\x64\x20\x65\x6d\x61\x69\x6c','\x23\x66\x66\x33\x64\x35\x61');return;}
  G.logins++;if(!G.name)G.name=n;if(!G.email)G.email=e;sv();
  document.getElementById('lp').style.display='\x6e\x6f\x6e\x65';
  document.getElementById('app').style.display='\x66\x6c\x65\x78';
  initGame();
}

var _aiv=null,_tabOk=true,_ss=0;
function initGame(){
  _ss=Date.now();
  checkOffline();
  renderAll();renderAch();renderRanks();renderCO();updDaily();updMiner();
  renderBoosts();renderEnigma();
  var ei=document.getElementById('\x65\x64\x69\x74\x4e\x61\x6d\x65');if(ei)ei.value=G.name||'';
  startAuto();startTick();
  document.addEventListener('\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x63\x68\x61\x6e\x67\x65',function(){
    _tabOk=!document.hidden;if(_tabOk){G.lastActive=Date.now();sv();}
  });
}
function checkOffline(){
  if(G.bot&&G.lastActive){
    var _0x2d2dee7a=Math.floor((Date.now()-G.lastActive)/1000),elap=Math.min(_0x2d2dee7a,28800);
    if(elap>60){G.vk+=elap;sv();showBotPop(elap);return;}
  }
  G.lastActive=Date.now();sv();
}

function getRk(){var c=G.vk,r=RK[0];for(var i=0;i<RK.length;i++)if(c>=RK[i].q)r=RK[i];return r;}
function getRkP(){
  var c=G.vk;
  for(var i=RK.length-1;i>=0;i--){
    if(c>=RK[i].q){
      if(i===RK.length-1)return{p:100,txt:'\x4d\x41\x58\x20\x52\x41\x4e\x4b'};
      var p=Math.min(100,Math.floor((c-RK[i].q)/(RK[i+1].q-RK[i].q)*100));
      return{p:p,txt:fm(RK[i+1].q-c)+'\x20\x56\x4b\x20\x74\x6f\x20'+RK[i+1].n};
    }
  }
  return{p:0,txt:''};
}
function getAR(){
  var r=0;
  for(var i=0;i<G.tap.length;i++)if(G.tap[i])r+=TP[i].r;
  for(var i=0;i<G.fac.length;i++)if(G.fac[i].a)r+=FC[i].r;
  var now=Date.now();
  if(G.bs.vs.active&&now<G.bs.vs.endAt)r+=50;
  if(G.bs.gr.active&&now<G.bs.gr.endAt)r*=2;
  return r;
}
function getTapBonus(){
  var b=0,now=Date.now();
  if(G.en.bc.active)b+=2;
  if(G.bs.sr.active&&now<G.bs.sr.endAt)b+=5;
  if(G.en.xm.active&&now<G.en.xm.endAt)b+=0.1; 
  return b;
}

function renderAll(){
  var c=Math.floor(G.vk),d=Math.floor(G.dia);
  st('cd',fm(c));st('dd',fm(d));st('nvk',fm(c)+' VK');st('\x6e\x64\x69\x61',fm(d)+'💎');
  st('tapD',fm(G.taps));st('\x6c\x6f\x67\x69\x6e\x44',G.logins);st('\x6d\x69\x6e\x65\x44',fm(G.mined));
  var rk=getRk();st('\x72\x6b\x6e\x61\x6d\x65',rk.n);
  var rb=document.getElementById('\x72\x6b\x62\x61\x64\x67\x65');if(rb)rb.textContent=rk.n.replace(/^\S+\s/,'');
  var rp=getRkP();var rf=document.getElementById('\x72\x6b\x70\x72\x6f\x67');if(rf)rf.style.width=rp.p+'%';
  st('\x72\x6b\x6e\x65\x78\x74',rp.txt);
  var fr=0;for(var i=0;i<G.fac.length;i++)if(G.fac[i].a)fr+=FC[i].r;
  st('\x66\x61\x63\x52\x61\x74\x65','+'+fr+'\x20\x56\x4b\x2f\x73');
  var ac=G.ach.filter(Boolean).length;
  st('\x61\x63\x68\x42\x61\x64\x67\x65',ac+'/30');st('\x61\x63\x68\x50\x72\x6f\x67',ac+'/30');
  var ar=getAR();var ab=document.getElementById('arb');
  if(ar>0){ab.textContent='⚡ +'+ar+'\x20\x56\x4b\x2f\x73\x20\x61\x75\x74\x6f';ab.classList.add('\x73\x68\x6f\x77');}else ab.classList.remove('\x73\x68\x6f\x77');
  renderShop();renderFac();

  var now=Date.now(),lines=[];
  if(G.en.bc.active)lines.push('<span style="color:var(--green);">🛡️ Buff Control — ACTIVE (+2/tap)</span>');
  if(G.en.ce.active)lines.push('<span style="color:var(--teal);">🌌 Celestial — ACTIVE (mine=100💎)</span>');
  if(G.en.xm.active&&now<G.en.xm.endAt)lines.push('<span style="color:var(--purple);">🧲 XP Magnet — '+fmT(Math.ceil((G.en.xm.endAt-now)/1000))+'\x20\x6c\x65\x66\x74\x3c\x2f\x73\x70\x61\x6e\x3e');
  BOOSTS.forEach(function(b){var bs=G.bs[b.id];if(bs&&bs.active&&now<bs.endAt)lines.push('<span style="color:var(--orange);">'+b.ico+' '+b.name+' — '+fmT(Math.ceil((bs.endAt-now)/1000))+'\x20\x6c\x65\x66\x74\x3c\x2f\x73\x70\x61\x6e\x3e');});
  var bc=document.getElementById('\x62\x75\x66\x66\x43\x61\x72\x64'),bl=document.getElementById('buffList');
  if(lines.length>0){if(bc)bc.style.display='';if(bl)bl.innerHTML=lines.join('<br/>');}
  else{if(bc)bc.style.display='\x6e\x6f\x6e\x65';}
}

function tap(ev){
  var _0x593616de=1+Math.floor(getTapBonus());
  if(G.en.xm.active&&Date.now()<G.en.xm.endAt)_0x593616de=Math.floor(_0x593616de*1.1)||1;
  G.vk+=_0x593616de;G.taps++;
  var h=new Date().getHours();
  if(h===1&&!G.ach[13]){G.ach[13]=true;toast('\x1f989\x20\x4e\x69\x67\x68\x74\x20\x4f\x77\x6c\x20\x75\x6e\x6c\x6f\x63\x6b\x65\x64\x21','\x23\x66\x66\x64\x37\x30\x30');}
  checkAch();sv();renderAll();
  if(ev){
    var btn=document.getElementById('\x63\x62\x74\x6e');
    var rp=document.createElement('\x73\x70\x61\x6e');rp.className='rip';var sz=btn.offsetWidth;rp.style.cssText='\x77\x69\x64\x74\x68\x3a'+sz+'\x70\x78\x3b\x68\x65\x69\x67\x68\x74\x3a'+sz+'\x70\x78\x3b\x6c\x65\x66\x74\x3a\x30\x3b\x74\x6f\x70\x3a\x30\x3b';
    btn.appendChild(rp);setTimeout(function(){rp.remove();},680);
    var fl=document.createElement('div');fl.className='tf';fl.textContent=(_0x593616de>1?'+'+_0x593616de:'+1');
    var rc=btn.getBoundingClientRect();fl.style.left=(rc.left+rc.width/2-14)+'px';fl.style.top=(rc.top+rc.height*.3)+'px';
    document.body.appendChild(fl);setTimeout(function(){fl.remove();},730);
  }
}

function startAuto(){
  clearInterval(_aiv);
  _aiv=setInterval(function(){
    if(!_tabOk)return;
    var r=getAR();
    var now=Date.now();
    var dr=G.bs.dr;if(dr.active&&now<dr.endAt&&now-dr.tick>=60000){G.dia+=2;dr.tick=now;}
    if(r>0){G.vk+=r;renderAll();checkAch();sv();}
  },1000);
}

function startTick(){
  setInterval(function(){
    var now=Date.now(),ch=false;
    BOOSTS.forEach(function(b){var bs=G.bs[b.id];if(bs.active&&now>=bs.endAt){bs.active=false;ch=true;toast('⏰ '+b.name+'\x20\x65\x78\x70\x69\x72\x65\x64\x21','\x23\x66\x66\x37\x62\x33\x35');}});
    if(G.en.xm.active&&now>=G.en.xm.endAt){G.en.xm.active=false;G.en.xm.cdEnd=now+50*3600000;ch=true;toast('🧲 XP Magnet expired! 50hr cooldown.','\x23\x62\x30\x36\x61\x66\x66');}
    if(ch){sv();renderAll();}
    renderBoosts();renderEnigma();
  },1000);
}

function renderShop(){
  for(var i=0;i<TP.length;i++){
    var el=document.getElementById('sh'+i);if(!el)continue;
    if(G.tap[i]){el.classList.add('own');el.classList.remove('lk');el.querySelector('\x2e\x73\x68\x70').style.color='var(--green)';el.querySelector('\x2e\x73\x68\x70').textContent='\x2705\x20\x4f\x57\x4e\x45\x44';continue;}
    var t=TP[i];var can=t.d>0?(G.dia>=t.d):(G.vk>=t.c);
    el.classList.toggle('lk',!can);el.classList.remove('own');
    el.querySelector('\x2e\x73\x68\x70').style.color='';
    el.querySelector('\x2e\x73\x68\x70').textContent=t.d>0?(fmf(t.d)+' 💎'):(fm(t.c)+' VK');
  }
  var ms=[document.getElementById('\x6d\x69\x6e\x65\x72\x42\x74\x6e\x53\x68\x6f\x70'),document.getElementById('\x6d\x69\x6e\x65\x72\x42\x74\x6e')];
  ms.forEach(function(m){if(!m)return;m.disabled=G.bot||G.vk<500000;m.textContent=G.bot?'\x2705\x20\x42\x4f\x54\x20\x4f\x57\x4e\x45\x44':'\x42\x55\x59\x20\x41\x55\x54\x4f\x20\x4d\x49\x4e\x45\x52';});
}
function buyT(i){
  if(G.tap[i]){toast('\x41\x6c\x72\x65\x61\x64\x79\x20\x6f\x77\x6e\x65\x64','\x23\x66\x66\x64\x37\x30\x30');return;}
  var t=TP[i];
  if(t.d>0){if(G.dia<t.d){toast('\x4e\x65\x65\x64\x20'+fmf(t.d)+' 💎','\x23\x66\x66\x33\x64\x35\x61');return;}G.dia-=t.d;}
  else{if(G.vk<t.c){toast('\x4e\x65\x65\x64\x20'+fm(t.c)+' VK','\x23\x66\x66\x33\x64\x35\x61');return;}G.vk-=t.c;}
  G.tap[i]=true;toast(i>=8?'\x1f608\x20\x45\x76\x69\x6c\x20\x54\x61\x70\x20\x75\x6e\x6c\x6f\x63\x6b\x65\x64\x21':'\x2705\x20\x54\x61\x70\x70\x65\x72\x20\x70\x75\x72\x63\x68\x61\x73\x65\x64\x21',i>=8?'\x23\x62\x30\x36\x61\x66\x66':'#00e5a0');
  checkAch();sv();renderAll();startAuto();
}

function renderFac(){
  for(var i=0;i<FC.length;i++){
    var f=G.fac[i];
    var _0x5dd2199a=document.getElementById('fc'+i),bb=document.getElementById('fb'+i),ba=document.getElementById('fa'+i),st2=document.getElementById('fs'+i);
    if(f.a){if(_0x5dd2199a)_0x5dd2199a.classList.add('fa');if(st2)st2.innerHTML='<span style="color:var(--green)">✅ Active — +'+FC[i].r+'\x20\x56\x4b\x2f\x73\x3c\x2f\x73\x70\x61\x6e\x3e';}
    else if(f.b){if(_0x5dd2199a)_0x5dd2199a.classList.remove('fa');if(st2)st2.innerHTML='<span style="color:var(--gold)">Purchased — not active</span>';}
    else{if(_0x5dd2199a)_0x5dd2199a.classList.remove('fa');if(st2)st2.textContent='\x4e\x6f\x74\x20\x70\x75\x72\x63\x68\x61\x73\x65\x64';}
    if(bb){bb.textContent=f.b?'\x2705\x20\x4f\x77\x6e\x65\x64':'\x42\x75\x79\x20\x28'+fm(FC[i].c)+'💎)';bb.disabled=f.b||G.dia<FC[i].c;}
    if(ba){ba.disabled=!f.b||f.a;ba.textContent=f.a?'\x2705\x20\x41\x63\x74\x69\x76\x65':'\x41\x63\x74\x69\x76\x61\x74\x65';}
  }
}
function buyF(i){if(G.fac[i].b){toast('\x41\x6c\x72\x65\x61\x64\x79\x20\x6f\x77\x6e\x65\x64','\x23\x66\x66\x64\x37\x30\x30');return;}if(G.dia<FC[i].c){toast('\x4e\x65\x65\x64\x20'+fmf(FC[i].c)+' 💎','\x23\x66\x66\x33\x64\x35\x61');return;}G.dia-=FC[i].c;G.fac[i].b=true;toast('🏭 '+FC[i].n+'\x20\x70\x75\x72\x63\x68\x61\x73\x65\x64\x21','#00e5a0');checkAch();sv();renderAll();renderFac();}
function actF(i){if(!G.fac[i].b){toast('Buy first','\x23\x66\x66\x33\x64\x35\x61');return;}if(G.fac[i].a)return;G.fac[i].a=true;toast('⚡ '+FC[i].n+'\x20\x61\x63\x74\x69\x76\x61\x74\x65\x64\x21','#00e5a0');checkAch();sv();renderAll();renderFac();startAuto();}

function updDia(){
  st('mVK',fm(G.vk));st('\x6d\x44\x69\x61',fm(G.dia));
  [[500,100000],[2000,900000],[10000,8000000]].forEach(function(p,i){var el=document.getElementById('dp'+i);if(el)el.classList.toggle('dlk',G.dia<p[0]);});
  [[100000,100],[500000,300],[5000000,1000]].forEach(function(p,i){var el=document.getElementById('vd'+i);if(el)el.classList.toggle('dlk',G.vk<p[0]);});
}
function doMine(){
  if(G.vk<50000){toast('\x4e\x65\x65\x64\x20\x35\x30\x2c\x30\x30\x30\x20\x56\x4b','\x23\x66\x66\x33\x64\x35\x61');return;}
  G.vk-=50000;
  var rw=G.en.ce.active?100:DPOOL[Math.floor(Math.random()*DPOOL.length)];
  G.dia+=rw;G.mined+=rw;
  var r=document.getElementById('\x6d\x72\x65\x73');if(r){r.textContent=(G.en.ce.active?'🌌 ':'')+'\x1f48e\x20\x4d\x69\x6e\x65\x64\x20'+rw+'\x20\x64\x69\x61\x6d\x6f\x6e\x64\x73\x21';setTimeout(function(){r.textContent='';},3000);}
  toast('+'+rw+' 💎'+(G.en.ce.active?' (Celestial!)':''),'\x23\x34\x66\x63\x33\x66\x37');
  checkAch();sv();renderAll();updDia();
}
function buyDP(i){
  var P=[[500,100000],[2000,900000],[10000,8000000]];var d=P[i][0],v=P[i][1];
  if(G.dia<d){toast('\x4e\x65\x65\x64\x20'+d+' 💎','\x23\x66\x66\x33\x64\x35\x61');return;}
  G.dia-=d;G.vk+=v;G.planUsed=true;toast('💰 +'+fm(v)+' VK!','\x23\x66\x66\x64\x37\x30\x30');checkAch();sv();renderAll();updDia();
}
function buyVD(i){
  var P=[[100000,100],[500000,300],[5000000,1000]];var c=P[i][0],g=P[i][1];
  if(G.vk<c){toast('\x4e\x65\x65\x64\x20'+fm(c)+' VK','\x23\x66\x66\x33\x64\x35\x61');return;}
  G.vk-=c;G.dia+=g;G.planUsed=true;toast('💎 +'+g+'!','\x23\x34\x66\x63\x33\x66\x37');checkAch();sv();renderAll();updDia();
}

function buyMiner(){if(G.bot){toast('\x41\x6c\x72\x65\x61\x64\x79\x20\x6f\x77\x6e\x65\x64','\x23\x66\x66\x64\x37\x30\x30');return;}if(G.vk<500000){toast('\x4e\x65\x65\x64\x20\x35\x30\x30\x2c\x30\x30\x30\x20\x56\x4b','\x23\x66\x66\x33\x64\x35\x61');return;}G.vk-=500000;G.bot=true;G.lastActive=Date.now();toast('\x1f916\x20\x41\x75\x74\x6f\x20\x4d\x69\x6e\x65\x72\x20\x61\x63\x74\x69\x76\x65\x21','#00e5a0');checkAch();sv();renderAll();updMiner();}
function updMiner(){
  var p=document.getElementById('\x6d\x69\x6e\x65\x72\x50\x69\x6c\x6c');if(!p)return;
  if(G.bot){p.innerHTML='\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x62\x70\x69\x6c\x6c\x22\x3e\x2705\x20\x42\x6f\x74\x20\x61\x63\x74\x69\x76\x65\x20\x61\x6e\x64\x20\x65\x61\x72\x6e\x69\x6e\x67\x20\x6f\x66\x66\x6c\x69\x6e\x65\x3c\x2f\x64\x69\x76\x3e';var b=document.getElementById('\x6d\x69\x6e\x65\x72\x42\x74\x6e');if(b){b.textContent='\x2705\x20\x42\x4f\x54\x20\x4f\x57\x4e\x45\x44';b.disabled=true;}}
  else{p.innerHTML='<div style="font-size:.7rem;color:var(--red);font-family:inherit;">⚠️ NOT PURCHASED</div>';}
}
function showBotPop(earned){
  var ov=document.createElement('div');ov.className='mov';
  ov.innerHTML='<div class="mb"><span class="mico">🤖</span><div class="mttl">Your Bot Worked!</div><div class="mbdy">Offline earnings deposited!<br/><br/><span style="font-family:inherit;font-size:1.18rem;color:var(--gold);font-weight:900;">+'+fmf(earned)+' VK</span></div><div class="mbts"><button class="mok" onclick="this.closest(\'.mov\').remove()">AWESOME! ✨</button></div></div>';
  document.body.appendChild(ov);G.lastActive=Date.now();sv();
}

function updDaily(){
  var now=Date.now(),_0x2d2dee7a=now-(G.daily.last||0),wait=4*24*60*60*1000;
  var btn=document.getElementById('\x63\x6c\x61\x69\x6d\x42\x74\x6e'),lk=document.getElementById('\x64\x61\x69\x6c\x79\x4c\x6b'),info=document.getElementById('\x64\x61\x69\x6c\x79\x49\x6e\x66\x6f');
  st('\x64\x61\x69\x6c\x79\x43\x6e\x74',G.dc||0);
  if(_0x2d2dee7a>=wait){if(btn)btn.disabled=false;if(lk)lk.textContent='';if(info)info.textContent='\x1f389\x20\x52\x65\x61\x64\x79\x20\x74\x6f\x20\x63\x6c\x61\x69\x6d\x21';}
  else{if(btn)btn.disabled=true;var hrs=Math.ceil((wait-_0x2d2dee7a)/3600000);if(lk)lk.textContent='🔒 ~'+hrs+'\x68\x20\x72\x65\x6d\x61\x69\x6e\x69\x6e\x67';if(info)info.textContent='\x43\x6f\x6d\x65\x20\x62\x61\x63\x6b\x20\x73\x6f\x6f\x6e\x21';}
}
function claimDaily(){
  if(Date.now()-(G.daily.last||0)<4*24*60*60*1000){toast('\x4e\x6f\x74\x20\x72\x65\x61\x64\x79\x20\x79\x65\x74\x21','\x23\x66\x66\x33\x64\x35\x61');return;}
  G.dia++;G.daily.last=Date.now();G.dc=(G.dc||0)+1;G.daily.cnt=(G.daily.cnt||0)+1;
  toast('\x1f381\x20\x2b\x31\x20\x1f48e\x20\x44\x61\x69\x6c\x79\x20\x72\x65\x77\x61\x72\x64\x21','\x23\x34\x66\x63\x33\x66\x37');checkAch();sv();renderAll();updDaily();
}

function renderCO(){
  st('\x63\x6f\x42\x61\x6c',fm(G.vk)+' VK');st('\x63\x6f\x52\x61\x6e\x6b','\x52\x61\x6e\x6b\x3a\x20'+getRk().n);
  var g=document.getElementById('coGrid');if(!g)return;
  var h='';CO.forEach(function(o,i){
    var ok=G.vk>=o.q;
    h+='\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x6f\x63\x20'+(ok?'':'clk')+'" onclick="tryCO('+i+')">'
      +'\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x6f\x61\x22\x3e'+o.l+'\x3c\x2f\x64\x69\x76\x3e'
      +'\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x6f\x72\x22\x3e'+fm(o.q)+'\x20\x56\x4b\x3c\x2f\x64\x69\x76\x3e'
      +'<div class="cos" style="color:'+(ok?'var(--green)':'var(--red)')+';">'+(ok?'✅ ELIGIBLE':'🔒 '+fm(o.q-G.vk)+'\x20\x6e\x65\x65\x64\x65\x64')+'\x3c\x2f\x64\x69\x76\x3e'
      +'\x3c\x2f\x64\x69\x76\x3e';
  });
  g.innerHTML=h;
}
function tryCO(i){
  var o=CO[i];if(G.vk<o.q){toast('\x4e\x6f\x74\x20\x65\x6e\x6f\x75\x67\x68\x20\x56\x4b','\x23\x66\x66\x33\x64\x35\x61');return;}
  var ov=document.createElement('div');ov.className='mov';
  ov.innerHTML='<div class="mb"><span class="mico">💸</span><div class="mttl">Cash Out '+o.l+'</div><div class="mbdy">📸 Screenshot your balance and send to <strong style="color:var(--gold);">VicBot</strong> on WhatsApp.<br/><br/>Balance: <span style="font-family:inherit;color:var(--gold);font-weight:900;">'+fm(G.vk)+' VK</span></div><button class="cpbtn" onclick="cpBal()">📋 Copy Balance</button><div class="mbts" style="margin-top:10px;"><a class="mok" href="https://wa.me/2348067630531" target="_blank" rel="noopener" style="text-decoration:none;">Open WhatsApp</a><button class="mcan" onclick="this.closest(\'.mov\').remove()">Cancel</button></div></div>';
  document.body.appendChild(ov);
}
function cpBal(){var t='\x56\x69\x63\x74\x6f\x72\x20\x43\x6f\x69\x6e\x3a\x20'+fm(G.vk)+' VK';if(navigator.clipboard)navigator.clipboard.writeText(t).then(function(){toast('\x2705\x20\x43\x6f\x70\x69\x65\x64\x21','#00e5a0');});else toast(t,'#00e5a0');}
