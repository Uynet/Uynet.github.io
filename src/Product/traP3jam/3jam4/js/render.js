const render =_=> {
  clear();
  ctx.save();
  /* 枠線 */
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0,0,canvas.width, canvas.height);
  
  /*draw Entity object */
  for(i=0;i<Entities.length;i++){
    Entities[i].draw();
  }
  if(state == 1){
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.font = "18px 'Monotype Corsiva'";
    ctx.fillText("game over :"+score+"てん!",10,30);
    ctx.fillText("retry to Space",10,60);
    ctx.fillText("tweet to Enter",10,90);
  }else{
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.font = "18px 'Monotype Corsiva'";
    ctx.fillText("score :"+score,10,30);
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
