var _$x=function(){var _a=0x1,_b=0x2;return _a+_b===0x3;};
function renderEnigma(){
  var now=Date.now();

  var bc=G.en.bc;
  var eu0=document.getElementById('eu0');if(eu0)eu0.disabled=G.vk<1000000;
  if(bc.unlocked){document.getElementById('el0').style.display='\x6e\x6f\x6e\x65';document.getElementById('er0').style.display='';document.getElementById('en0').classList.toggle('\x65\x61\x63\x74',bc.active);
    var h0=bc.active?'<button class="edbt" onclick="deactE(0)">DEACTIVATE</button>':'<button class="eabt" onclick="actE(0)">ACTIVATE</button>';
    sth('\x65\x62\x73\x30',h0);st('et0',bc.active?'🟢 ACTIVE — tap to deactivate':'');
  }

  var ce=G.en.ce;
  var eu1=document.getElementById('eu1');if(eu1)eu1.disabled=G.vk<1000000;
  if(ce.unlocked){document.getElementById('el1').style.display='\x6e\x6f\x6e\x65';document.getElementById('er1').style.display='';document.getElementById('en1').classList.toggle('\x65\x61\x63\x74',ce.active);
    var h1=ce.active?'<button class="edbt" onclick="deactE(1)">DEACTIVATE</button>':'<button class="eabt" onclick="actE(1)">ACTIVATE</button>';
    sth('\x65\x62\x73\x31',h1);st('et1',ce.active?'🟢 ACTIVE — all mines yield 500 💎':'');
  }

  var xm=G.en.xm;
  var eu2=document.getElementById('eu2');if(eu2)eu2.disabled=G.vk<1000000;
  if(xm.unlocked){document.getElementById('el2').style.display='\x6e\x6f\x6e\x65';document.getElementById('er2').style.display='';
    var _0xf38f3fb7=xm.active&&now<xm.endAt,onCd=!_0xf38f3fb7&&xm.cdEnd&&now<xm.cdEnd;
    document.getElementById('en2').classList.toggle('\x65\x61\x63\x74',_0xf38f3fb7);
    var h2='\x3c\x62\x75\x74\x74\x6f\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x65\x61\x62\x74\x22\x20'+(_0xf38f3fb7||onCd?'\x64\x69\x73\x61\x62\x6c\x65\x64':'')+' onclick="actE(2)">ACTIVATE</button>';
    if(_0xf38f3fb7)h2+='<span style="font-size:.58rem;color:var(--gr);font-family:Share Tech Mono,monospace;padding:7px 4px;">ACTIVE ✓</span>';
    sth('\x65\x62\x73\x32',h2);
    var t2='';
    if(_0xf38f3fb7)t2='\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x74\x6f\x6e\x22\x3e\x1f7e2\x20'+fmT(Math.ceil((xm.endAt-now)/1000))+'\x20\x6c\x65\x66\x74\x3c\x2f\x73\x70\x61\x6e\x3e';
    else if(onCd)t2='<span class="tcd">⏳ Cooldown: '+fmT(Math.ceil((xm.cdEnd-now)/1000))+'\x3c\x2f\x73\x70\x61\x6e\x3e';
    sth('et2',t2);
  }
}
function unlockE(i){
  if(G.vk<1000000){toast('\x4e\x65\x65\x64\x20\x31\x2c\x30\x30\x30\x2c\x30\x30\x30\x20\x56\x4b','\x23\x66\x66\x33\x64\x35\x61');return;}
  G.vk-=1000000;
  var _0x14f802e1=['bc','ce','xm'];G.en[_0x14f802e1[i]].unlocked=true;
  var _0xa8998c31=['\x42\x75\x66\x66\x20\x43\x6f\x6e\x74\x72\x6f\x6c','Celestial','\x58\x50\x20\x4d\x61\x67\x6e\x65\x74'];
  toast('🎭 '+_0xa8998c31[i]+'\x20\x52\x45\x56\x45\x41\x4c\x45\x44\x21','\x23\x62\x30\x36\x61\x66\x66');sv();renderAll();renderEnigma();
}
function actE(i){
  var _0x14f802e1=['bc','ce','xm'];var en=G.en[_0x14f802e1[i]];if(!en.unlocked)return;
  if(i<2){en.active=true;toast('✨ '+['\x42\x75\x66\x66\x20\x43\x6f\x6e\x74\x72\x6f\x6c','Celestial'][i]+'\x20\x41\x43\x54\x49\x56\x41\x54\x45\x44\x21','\x23\x62\x30\x36\x61\x66\x66');}
  else{
    var now=Date.now();if(en.cdEnd&&now<en.cdEnd){toast('Still on cooldown!','\x23\x66\x66\x33\x64\x35\x61');return;}
    en.active=true;en.endAt=now+20000;
    toast('\x1f9f2\x20\x58\x50\x20\x4d\x61\x67\x6e\x65\x74\x20\x4f\x4e\x20\x2014\x20\x32\x30\x20\x73\x65\x63\x6f\x6e\x64\x73\x21','\x23\x62\x30\x36\x61\x66\x66');
    setTimeout(function(){en.active=false;en.cdEnd=Date.now()+50*3600000;sv();renderAll();renderEnigma();toast('🧲 XP Magnet ended. 50hr cooldown.','\x23\x62\x30\x36\x61\x66\x66');},20000);
  }
  sv();renderAll();renderEnigma();
}
function deactE(i){
  var _0x14f802e1=['bc','ce'];G.en[_0x14f802e1[i]].active=false;
  toast('🎭 '+['\x42\x75\x66\x66\x20\x43\x6f\x6e\x74\x72\x6f\x6c','Celestial'][i]+'\x20\x64\x65\x61\x63\x74\x69\x76\x61\x74\x65\x64\x2e','\x23\x62\x30\x36\x61\x66\x66');sv();renderAll();renderEnigma();
}
