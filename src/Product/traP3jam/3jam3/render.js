const render =_=> {
  clear();
  /*draw Entity object */
  for(i=0;i<Entities.length;i++){
    Entities[i].draw();
  }
  /*draw Entity object */
  for(i=0;i<Particles.length;i++){
    if(Particles[i].size<0.5){ 
      Particles.splice(i,1); 
    }
    else{
      Particles[i].draw();
    }
  }


  /* 枠線 */
  ctx.beginPath();
  ctx.fillStyle = 'rgb(192, 80, 77)';
  ctx.strokeRect(0, 0,canvas.width, canvas.height);
  
    


  switch(state){
    case 0://title
      if(input_key[SPACE]==1)state = 1;
      ctx.drawImage(title,0,-160);
      ctx.fillStyle = 'rgb(255,255,255)';
      ctx.font = "26px 'Monotype Corsiva'";
      ctx.fillText("press SPACE",80+quakeX,100+quakeY);
      break;
    case 1://game
      if(timer <=0) state = 2;
      if(!suikaSetting)makeSuika();
      ctx.fillStyle = 'rgb(255,255,255)';
      ctx.font = "23px 'Monotype Corsiva'";
      ctx.fillText("すこあ :"+score,160+quakeX,70+quakeY);
      ctx.fillText(""+timer,190+quakeX,210+quakeY);

      if(input_key[ARROW_LEFT]&&click){
          vec = 0;
        if(!SUIKA[0]){
          state = 3;
        }
        else{
          Entities[0].bomb();
          state = 2;
        }
      }
      if(input_key[ARROW_UP]&&click){
          vec = 1;
        if(!SUIKA[1]){
          state = 3;
        }
        else{
          Entities[1].bomb();
          state = 2;
        }
      }
      if(input_key[ARROW_RIGHT]&&click){
          vec = 2;
        if(!SUIKA[2]){
          state = 3;
        }
        else{
          Entities[2].bomb();
          state = 2;
        }
      }
      if(input_key[ARROW_DOWN]&&click){
          vec = 3;
        if(!SUIKA[3]){
          state = 3;
        }
        else{
          Entities[3].bomb();
          state = 2;
        }
      }
      break;
    case 2://gameover
      
      if(input_key[SPACE] == 1) init();
      ctx.fillStyle = 'rgb(255,255,255)';
      ctx.font = "18px 'Monotype Corsiva'";
      ctx.fillText("game over :"+score+"てん!",0,30);
      ctx.fillText("Tweet:ENTER",0,70);
      ctx.fillText("Rstart:SPACE",0,100);
      if(input_key[ENTER]){
        exit = true;
        let tweet = ["https://twitter.com/intent/tweet?text=",score,"玉のスイカを破壊しました！ https://uynet.github.io/traP3jam/3jam2/index.html #traP3jam"] ;
        let con  =  tweet.join("");
        location.href = (con);
      }
      break;
    case 3://suika
      timer_reset *= 0.97;
      timer = Math.floor(timer_reset); 
      Entities[vec].bomb();
      deleteSuika();
      score ++;
      click = false;
      state = 1; 
      break;
  }

}

const clear = _=>{
  ctx.fillStyle = 'rgb(210,185,165)';
  ctx.beginPath();
  ctx.fillRect(0, 0,canvas.width, canvas.height);
}

const makeSuika = _=>{
  for(i=0;i<4;i++){
    SUIKA[i] = 0;
  }

  SUIKA[Math.floor(4*Math.random())] = 1;
    let rad = 70;
  for(i=0;i<4;i++){
    x = 172 + Math.floor(rad *(-Math.cos(Math.PI * i/2)));
    y = 172 + Math.floor(rad *(-Math.sin(Math.PI * i/2)));
    a = new Object(x,y);
    a.type = SUIKA[i];
    Entities.push(a);
  }
suikaSetting = 1;
}

const deleteSuika =_=>{
  while(Entities.length>0)Entities.pop();
  suikaSetting = 0;
}
