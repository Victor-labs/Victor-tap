var _$x=function(){var _a=0x1,_b=0x2;return _a+_b===0x3;};
function renderBoosts(){
  var now=Date.now();
  BOOSTS.forEach(function(b,i){
    var bs=G.bs[b.id];
    var _0xf38f3fb7=bs.active&&now<bs.endAt;
    var pct=_0xf38f3fb7?Math.max(0,((bs.endAt-now)/(b.dur*1000))*100):0;
    var _0x5dd2199a=document.getElementById('\x62\x6f\x6f\x63'+i);if(_0x5dd2199a)_0x5dd2199a.classList.toggle('act',_0xf38f3fb7);
    var mf=document.getElementById('bm'+i);if(mf)mf.style.width=pct+'%';
    var bts=document.getElementById('bb'+i);
    if(bts){
      var h='';
      if(!bs.owned)h='\x3c\x62\x75\x74\x74\x6f\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x62\x62\x32\x20\x62\x62\x62\x75\x79\x22\x20'+(G.vk<b.price?'\x64\x69\x73\x61\x62\x6c\x65\x64':'')+' onclick="buyBoost(\''+b.id+'\')">BUY '+fm(b.price)+'\x20\x56\x4b\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e';
      else h='\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x62\x62\x6f\x77\x6e\x22\x3e\x2705\x20\x4f\x57\x4e\x45\x44\x3c\x2f\x73\x70\x61\x6e\x3e';
      if(bs.owned&&!_0xf38f3fb7)h+='<button class="bb2 bbact" onclick="actBoost(\''+b.id+'\')">ACTIVATE</button>';
      if(_0xf38f3fb7)h+='<span style="font-size:.58rem;color:var(--gr);font-family:Share Tech Mono,monospace;padding:7px 4px;">ACTIVE ✓</span>';
      bts.innerHTML=h;
    }
    var _0x77ddcb5f=document.getElementById('bs'+i);
    if(_0x77ddcb5f){
      if(_0xf38f3fb7)_0x77ddcb5f.innerHTML='\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x62\x73\x6f\x6e\x22\x3e\x1f7e2\x20'+fmT(Math.ceil((bs.endAt-now)/1000))+'\x20\x72\x65\x6d\x61\x69\x6e\x69\x6e\x67\x3c\x2f\x73\x70\x61\x6e\x3e';
      else if(bs.owned)_0x77ddcb5f.innerHTML='<span style="color:var(--dim2);">💤 Ready — click Activate</span>';
      else _0x77ddcb5f.textContent='';
    }
  });
}
function buyBoost(id){
  var b=BOOSTS.find(function(x){return x.id===id;});if(!b)return;
  if(G.vk<b.price){toast('\x4e\x65\x65\x64\x20'+fm(b.price)+' VK','\x23\x66\x66\x33\x64\x35\x61');return;}
  G.vk-=b.price;G.bs[id].owned=true;
  toast('⚡ '+b.name+'\x20\x70\x75\x72\x63\x68\x61\x73\x65\x64\x21\x20\x41\x63\x74\x69\x76\x61\x74\x65\x20\x77\x68\x65\x6e\x20\x72\x65\x61\x64\x79\x2e','\x23\x66\x66\x37\x62\x33\x35');
  G.boosted=(G.boosted||0)+1;checkAch();sv();renderAll();renderBoosts();
}
function actBoost(id){
  var b=BOOSTS.find(function(x){return x.id===id;});if(!b||!G.bs[id].owned)return;
  G.bs[id].active=true;G.bs[id].endAt=Date.now()+(b.dur*1000);if(id==='dr')G.bs[id].tick=Date.now();
  toast('🚀 '+b.name+'\x20\x41\x43\x54\x49\x56\x41\x54\x45\x44\x21','\x23\x66\x66\x37\x62\x33\x35');sv();renderAll();renderBoosts();startAuto();
}
