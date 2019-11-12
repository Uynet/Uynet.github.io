const update = _=>{
  ctx.restore();
  ctx.save();
  switch(state){
    case 0:
      if(timer%(Math.floor(term))==0){
        score++
        g = EffectHandler.shake(dep,dep);
        let ran = 1600*Math.random();
        let po1 = Math.floor(ran/400);
        let po2 = ran%400;
        let waveX,waveY;
        switch(po1){
          case 0:
            waveX = po2;
            waveY = 0;
          break; 
          case 1:
            waveX = 400;
            waveY = po2;
          break; 
          case 2:
            waveX = po2;
            waveY = 400;
          break; 
          case 3:
            waveX = 0;
            waveY = po2;
          break; 
        }
        b = new Wave(waveX,waveY);
        b.vx = 1*Math.random();
        b.hz = 5+15*Math.random()
        Entities.push(b);
        term *= 0.99;
      }
      g.next();
      /*update Entity object */
      for(i=0;i<Entities.length;i++){
        Entities[i].update();
        if(Entities[i].size>800){
            Entities.splice(i,1);
        }

      }
  break;
  case 1:
    if(input_key[32]){
      init();
    }
      if(input_key[13]){
        exit = true;
        let tweet = ["https://twitter.com/intent/tweet?text=",score,"点ぶんのなみなみをした！ https://uynet.github.io/traP3jam/3jam4/js/index.html #traP3jam"] ;
        let con  =  tweet.join("");
        location.href = (con);
      }
    
  break;
  }
}
