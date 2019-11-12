const render =_=> {
  clear();
  /*draw Entity object */
  for(i=0;i<Entity.length;i++){
    if(Entity[i].size<0.5){ Entity.splice(i,1); }
    else{ Entity[i].draw(); }
  }


  /* 枠線 */
  ctx.beginPath();
  ctx.fillStyle = 'rgb(192, 80, 77)';
  ctx.strokeRect(0, 0,canvas.width, canvas.height);
}

const clear = _=>{
  ctx.fillStyle = 'rgb(255,255,255)';
  ctx.beginPath();
  ctx.fillRect(0, 0,canvas.width, canvas.height);
  ctx.fillStyle = 'rgb(25,4,42)';
  //flush
  if(yo == 1){
    ctx.fillStyle = 'rgb(169,255,255)';
  ctx.fillRect(0, 0,canvas.width, canvas.height);
    return;
  }

  ctx.fillRect(quakeX, quakeY,canvas.width, canvas.height);
}

