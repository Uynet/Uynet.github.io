const load = _=>{
  /* load images*/
  mej = new Image();
  mej.src = "images/mej.png" ;
  SE_Bomb = new Audio();
  SE_Bomb.src = "bomb.wav";
}

const init = _=>{
  canvas = document.getElementById('canvassample');
  ctx = canvas.getContext('2d');
  t  = 0;
  quakeX = 0;
  quakeY = 0;
  po =0; 
  yo =0; 
  let a = new Object(280,680,0);
  a.setsize(30);
  a.setV(5*(Math.random()-0.5),-40-10*Math.random());
  a.settype(0);
  Entity.push(a);

  load();
}


