const load = _=>{
  /* load images*/
  banana = new Image();
  banana.src = "images/banana.png" ;
  suika = new Image();
  suika.src = "images/aa.png" ;
}

const init = _=>{
  canvas = document.getElementById('canvassample');
  ctx = canvas.getContext('2d');
  ctx.save();
  EffectHandler = EffectHandlerGetter();
  g = EffectHandler.shake(0,0);
  timer = 0;
  term = 100;
  dep = 40; 
  while(Entities.length>0){
    Entities.pop();
  }
  a = new Apple(100,100);
  Entities.push(a);
  load();
}




