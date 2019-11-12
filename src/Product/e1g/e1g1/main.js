/* global変数群 */
let mej;
let SE_Bomb;
let SE_shot1;
let SE_shot2;
let input_key=[];
/* objects */
let Entity=[];
/* graphics handler */
let canvas;
let ctx;
let t  = 0;
let quakeX = 0;
let quakeY = 0;
let po =0; 
let yo =0; 


const launch = _=>{
  let a = new Object(280,680,0);
  a.setsize(30);
  a.setV(5*(Math.random()-0.5),-45-5*Math.random());
  a.settype(0);
  a.r = 250;
  a.g = 0;
  a.b = 100;
  Entity.push(a);
  render();
}

/* initialization */
onload = _=> {
  init();
  render();
  loop();
};


/* main loop */
const loop =_=> {
  window.requestAnimationFrame(loop);
//  input();
  yure();
  update();
  render();
  t++;
}
