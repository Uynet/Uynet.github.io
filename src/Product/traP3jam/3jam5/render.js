const render =_=> {
  clear();
  ctx.save();
  /* bg  */
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0,0,canvas.width, canvas.height);
  

  /*draw Entity object */
  for(i=0;i<Entities.length;i++){
    Entities[i].draw();
  }
    ctx.restore();

}

const clear = _=>{
  ctx.save();
  ctx.translate(0,0);
  ctx.fillStyle = 'rgb(255,255,255)';
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.restore();
}
