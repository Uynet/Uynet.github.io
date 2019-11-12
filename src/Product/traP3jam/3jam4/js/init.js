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
  state = 0;
  timer = 0;
  state = 0;
  term = 100;
  dep = 40; 
  score = 0; 
  while(Entities.length>0){
    Entities.pop();
  }
  a = new Apple(150,150);
  Entities.push(a);
  load();
}




