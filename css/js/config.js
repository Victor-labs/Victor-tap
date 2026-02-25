
var _$x=function(){var _a=0x1,_b=0x2;return _a+_b===0x3;};
document.addEventListener('\x63\x6f\x6e\x74\x65\x78\x74\x6d\x65\x6e\x75',function(e){e.preventDefault();});
document.addEventListener('\x6b\x65\x79\x64\x6f\x77\x6e',function(e){
  if(e.key==='F12'||(e.ctrlKey&&e.shiftKey&&['I','J','C'].includes(e.key))||(e.ctrlKey&&e.key==='u')){e.preventDefault();return false;}
});

(function(){
  var cv=document.getElementById('bgC'),cx=cv.getContext('2d');
  var W,H,ok=true,S=[],P=[],L=[],NB=[];
  function rsz(){W=cv.width=window.innerWidth;H=cv.height=window.innerHeight;S=[];P=[];L=[];NB=[];
    for(var i=0;i<160;i++)S.push({x:Math.random()*W,y:Math.random()*H,r:.15+Math.random()*1.2,ph:Math.random()*6.28,sp:.004+Math.random()*.009});
    for(var i=0;i<28;i++)P.push({x:Math.random()*W,y:Math.random()*H,vy:-.1-Math.random()*.22,vx:(Math.random()-.5)*.1,r:.4+Math.random()*1.8,ph:Math.random()*6.28,da:.003+Math.random()*.005});
    for(var i=0;i<20;i++){var a=Math.floor(Math.random()*S.length),b=Math.floor(Math.random()*S.length);L.push({a:a,b:b,ph:Math.random()*6.28,sp:.0015});}
    for(var i=0;i<3;i++)NB.push({x:Math.random()*W,y:Math.random()*H,r:180+Math.random()*200,h:200+Math.random()*60,ph:Math.random()*6.28,sp:.0009});
  }
  window.addEventListener('\x72\x65\x73\x69\x7a\x65',rsz);rsz();
  document.addEventListener('\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x63\x68\x61\x6e\x67\x65',function(){ok=!document.hidden;});
  (function _0x817491bc(){requestAnimationFrame(_0x817491bc);if(!ok)return;
    cx.clearRect(0,0,W,H);cx.fillStyle='#020409';cx.fillRect(0,0,W,H);
    NB.forEach(function(n){n.ph+=n.sp;var op=.016+.009*Math.sin(n.ph);
      var g=cx.createRadialGradient(n.x,n.y,0,n.x,n.y,n.r);
      g.addColorStop(0,'\x68\x73\x6c\x61\x28'+n.h+',68%,52%,'+op+')');g.addColorStop(1,'\x74\x72\x61\x6e\x73\x70\x61\x72\x65\x6e\x74');
      cx.fillStyle=g;cx.beginPath();cx.arc(n.x,n.y,n.r,0,6.28);cx.fill();});
    L.forEach(function(l){l.ph+=l.sp;if(S[l.a]&&S[l.b]){
      cx.beginPath();cx.moveTo(S[l.a].x,S[l.a].y);cx.lineTo(S[l.b].x,S[l.b].y);
      cx.strokeStyle='\x72\x67\x62\x61\x28\x32\x34\x30\x2c\x31\x39\x32\x2c\x36\x34\x2c'+(0.024+0.018*Math.sin(l.ph))+')';cx.lineWidth=.5;cx.stroke();}});
    S.forEach(function(s){s.ph+=s.sp;var op=.14+.48*Math.abs(Math.sin(s.ph));
      cx.beginPath();cx.arc(s.x,s.y,s.r,0,6.28);cx.fillStyle='\x72\x67\x62\x61\x28\x32\x31\x30\x2c\x32\x32\x35\x2c\x32\x35\x35\x2c'+op+')';cx.fill();});
    P.forEach(function(p){p.x+=p.vx;p.y+=p.vy;p.ph+=p.da;
      if(p.y<-8){p.y=H+8;p.x=Math.random()*W;}if(p.x<-8)p.x=W+8;if(p.x>W+8)p.x=-8;
      cx.beginPath();cx.arc(p.x,p.y,p.r,0,6.28);cx.fillStyle='\x72\x67\x62\x61\x28\x32\x34\x30\x2c\x31\x39\x32\x2c\x36\x34\x2c'+(0.07+0.12*Math.abs(Math.sin(p.ph)))+')';cx.fill();});
  })();
})();

var TP=[{r:1,c:5000,d:0},{r:3,c:25000,d:0},{r:6,c:80000,d:0},{r:9,c:200000,d:0},
  {r:11,c:500000,d:0},{r:14,c:1200000,d:0},{r:20,c:3000000,d:0},{r:25,c:7000000,d:0},
  {r:20,c:0,d:2000},{r:25,c:0,d:5000}];
var FC=[{n:'Winter Industry',r:15,c:500},{n:'Hell Industry',r:35,c:10000},{n:'Stardust Industry',r:22,c:3500}];
var RK=[{n:'\x1f331\x20\x4e\x65\x77\x62\x69\x65',q:0},{n:'\x2694\xfe0f\x20\x56\x65\x74\x65\x72\x61\x6e',q:50000},{n:'\x1f525\x20\x50\x72\x6f',q:500000},{n:'👑 Master',q:5000000},{n:'\x1f31f\x20\x4c\x65\x67\x65\x6e\x64',q:50000000}];
var DPOOL=[15,25,35,30,60,25,18,35,400,120,40,22,10,12,500];
var CO=[{l:'₦1,000',q:1000000},{l:'₦2,000',q:100000000},{l:'₦5,000',q:100000000000},{l:'₦7,000',q:900000000000}];
var BOOSTS=[
  {id:'sr',name:'\x53\x70\x65\x65\x64\x20\x52\x75\x73\x68',ico:'🚀',desc:'+5 VK per tap',price:50000,dur:30*60},
  {id:'dr',name:'\x44\x69\x61\x6d\x6f\x6e\x64\x20\x52\x61\x69\x6e',ico:'🌧️',desc:'\x2b\x32\x20\x1f48e\x20\x65\x76\x65\x72\x79\x20\x36\x30\x73',price:150000,dur:60*60},
  {id:'vs',name:'\x56\x4b\x20\x53\x75\x72\x67\x65',ico:'⚡',desc:'\x2b\x35\x30\x20\x56\x4b\x2f\x73\x20\x61\x75\x74\x6f',price:300000,dur:20*60},
  {id:'gr',name:'Gold Rush',ico:'💛',desc:'\x32\x78\x20\x61\x75\x74\x6f\x20\x65\x61\x72\x6e\x69\x6e\x67\x73',price:500000,dur:15*60}
];
var ACHS=[
  {n:'\x43\x6c\x69\x63\x6b\x20\x42\x61\x69\x74',e:'🖱️',c:'\x52\x65\x61\x63\x68\x20\x31\x30\x2c\x30\x30\x30\x20\x56\x4b',f:function(g){return g.vk>=10000;}},
  {n:'Cold Tapper',e:'🧊',c:'\x54\x61\x70\x20\x35\x30\x20\x74\x69\x6d\x65\x73',f:function(g){return g.taps>=50;}},
  {n:'\x46\x61\x72\x6d\x65\x72',e:'⛏️',c:'\x4d\x69\x6e\x65\x20\x34\x30\x20\x64\x69\x61\x6d\x6f\x6e\x64\x73\x20\x74\x6f\x74\x61\x6c',f:function(g){return g.mined>=40;}},
  {n:'\x53\x74\x65\x61\x64\x79\x20\x52\x68\x79\x74\x68\x6d',e:'🎵',c:'\x45\x61\x72\x6e\x20\x32\x30\x4b\x20\x56\x4b\x20\x77\x69\x74\x68\x69\x6e\x20\x36\x20\x6d\x69\x6e\x20\x6f\x66\x20\x6c\x6f\x67\x69\x6e',f:function(){return false;}},
  {n:'\x46\x75\x72\x79\x20\x54\x61\x70',e:'💢',c:'\x52\x65\x61\x63\x68\x20\x32\x30\x30\x2c\x30\x30\x30\x20\x56\x4b',f:function(g){return g.vk>=200000;}},
  {n:'\x4f\x72\x67\x61\x6e\x69\x7a\x65\x72',e:'🏭',c:'\x50\x75\x72\x63\x68\x61\x73\x65\x20\x31\x20\x66\x61\x63\x74\x6f\x72\x79',f:function(g){return g.fac.filter(function(f){return f.b;}).length>=1;}},
  {n:'\x4d\x72\x2e\x20\x56\x4b',e:'🎩',c:'\x52\x65\x61\x63\x68\x20\x35\x30\x30\x2c\x30\x30\x30\x20\x56\x4b',f:function(g){return g.vk>=500000;}},
  {n:'\x48\x75\x6e\x74\x65\x72',e:'🏹',c:'\x4d\x69\x6e\x65\x20\x32\x30\x30\x20\x64\x69\x61\x6d\x6f\x6e\x64\x73\x20\x74\x6f\x74\x61\x6c',f:function(g){return g.mined>=200;}},
  {n:'Evil Grin',e:'😈',c:'Own an Evil Tap tapper',f:function(g){return g.tap[8]||g.tap[9];}},
  {n:'\x45\x6e\x74\x72\x65\x70\x72\x65\x6e\x65\x75\x72',e:'💼',c:'\x4f\x77\x6e\x20\x61\x6c\x6c\x20\x33\x20\x66\x61\x63\x74\x6f\x72\x69\x65\x73',f:function(g){return g.fac.filter(function(f){return f.b;}).length>=3;}},
  {n:'Cash Master',e:'💰',c:'\x55\x73\x65\x20\x61\x6e\x79\x20\x63\x6f\x6e\x76\x65\x72\x73\x69\x6f\x6e\x20\x70\x6c\x61\x6e',f:function(g){return g.planUsed;}},
  {n:'\x54\x6f\x72\x6e\x61\x64\x6f',e:'🌪️',c:'Activate 3 boosts',f:function(g){return g.boosted>=3;}},
  {n:'\x48\x65\x72\x6f',e:'🦸',c:'\x52\x65\x61\x63\x68\x20\x35\x30\x2c\x30\x30\x30\x20\x56\x4b',f:function(g){return g.vk>=50000;}},
  {n:'\x4e\x69\x67\x68\x74\x20\x4f\x77\x6c',e:'🦉',c:'\x54\x61\x70\x20\x61\x74\x20\x31\x41\x4d',f:function(){return false;}},
  {n:'\x44\x65\x64\x69\x63\x61\x74\x65\x64\x20\x43\x6f\x6c\x6c\x65\x63\x74\x6f\x72',e:'📅',c:'\x43\x6c\x61\x69\x6d\x20\x64\x61\x69\x6c\x79\x20\x72\x65\x77\x61\x72\x64\x20\x35\x20\x74\x69\x6d\x65\x73',f:function(g){return g.dc>=5;}},
  {n:'\x43\x61\x73\x68\x69\x65\x72',e:'🏧',c:'\x52\x65\x61\x63\x68\x20\x31\x2c\x30\x30\x30\x2c\x30\x30\x30\x20\x56\x4b',f:function(g){return g.vk>=1000000;}},
  {n:'\x44\x61\x69\x6c\x79\x20\x52\x65\x67\x75\x6c\x61\x72\x73',e:'📆',c:'\x4c\x6f\x67\x69\x6e\x20\x32\x30\x20\x74\x69\x6d\x65\x73',f:function(g){return g.logins>=20;}},
  {n:'\x42\x72\x6f\x74\x68\x65\x72\x20\x56\x69\x63',e:'👊',c:'\x52\x65\x61\x63\x68\x20\x35\x30\x2c\x30\x30\x30\x20\x56\x4b',f:function(g){return g.vk>=50000;}},
  {n:'\x57\x69\x6e\x74\x65\x72\x20\x54\x69\x6d\x65',e:'❄️',c:'Activate Winter Industry',f:function(g){return g.fac[0].a;}},
  {n:'\x53\x61\x6e\x74\x61',e:'🎅',c:'Purchase Winter Industry',f:function(g){return g.fac[0].b;}},
  {n:'\x48\x65\x6c\x6c\x20\x42\x65\x6e\x74',e:'😈',c:'Activate Hell Industry',f:function(g){return g.fac[1].a;}},
  {n:'\x53\x6f\x6e\x20\x6f\x66\x20\x44\x61\x72\x6b\x6e\x65\x73\x73',e:'🖤',c:'Purchase Hell Industry',f:function(g){return g.fac[1].b;}},
  {n:'VK Master',e:'🔱',c:'\x52\x65\x61\x63\x68\x20\x32\x2c\x30\x30\x30\x2c\x30\x30\x30\x20\x56\x4b',f:function(g){return g.vk>=2000000;}},
  {n:'\x42\x75\x73\x69\x6e\x65\x73\x73\x20\x4d\x69\x6e\x64\x73',e:'🏙️',c:'\x50\x75\x72\x63\x68\x61\x73\x65\x20\x33\x2b\x20\x66\x61\x63\x74\x6f\x72\x69\x65\x73',f:function(g){return g.fac.filter(function(f){return f.b;}).length>=3;}},
  {n:'\x54\x79\x63\x6f\x6f\x6e',e:'💎',c:'\x55\x73\x65\x20\x61\x6e\x79\x20\x63\x6f\x6e\x76\x65\x72\x73\x69\x6f\x6e\x20\x70\x6c\x61\x6e',f:function(g){return g.planUsed;}},
  {n:'\x42\x61\x6e\x6b\x65\x64',e:'🏦',c:'\x4f\x77\x6e\x20\x74\x68\x65\x20\x41\x75\x74\x6f\x20\x4d\x69\x6e\x65\x72\x20\x42\x6f\x74',f:function(g){return g.bot;}},
  {n:'\x4c\x69\x67\x68\x74\x73\x20\x4f\x6e',e:'💡',c:'\x41\x63\x74\x69\x76\x61\x74\x65\x20\x61\x6e\x79\x20\x66\x61\x63\x74\x6f\x72\x79',f:function(g){return g.fac.some(function(f){return f.a;});}},
  {n:'\x52\x75\x61\x75\x73\x68\x69',e:'✨',c:'Purchase Stardust Industry',f:function(g){return g.fac[2].b;}},
  {n:'\x53\x74\x61\x72\x20\x26\x20\x4d\x6f\x6f\x6e',e:'🌙',c:'Activate Stardust Industry',f:function(g){return g.fac[2].a;}},
  {n:'Master of Currency',e:'👑',c:'\x4d\x69\x6e\x65\x20\x39\x30\x30\x20\x64\x69\x61\x6d\x6f\x6e\x64\x73\x20\x74\x6f\x74\x61\x6c',f:function(g){return g.mined>=900;}}
];
