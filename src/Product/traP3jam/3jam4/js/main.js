/* global変数群 */
let input_key=[];
/* objects */
let Entities=[];
/* graphics handler */
let canvas;
let ctx;
let timer;
let EffectHandler;
let g;
let state = 0;
let term = 10;
let dep = 10; /* initialization */
let score = 0; /* initialization */
 onload = _=> {
  init();
  loop();
};

/* main loop */
const loop =_=> {
  window.requestAnimationFrame(loop);
      input();
      update();
      render();
      timer+=1;
}
