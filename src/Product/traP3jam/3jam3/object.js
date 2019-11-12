/*
  P:Vector2D Position
  V:Vector2D Velocity
*/

class Object{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.type = 0; 
    this.size = 10; 
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.arg = 0;
  }

  draw(){
      ctx.beginPath();
      switch(this.type){
      case 1:
        ctx.drawImage(banana, this.x+quakeX, this.y+quakeY);
      break;
      case 0:
        ctx.drawImage(suika, this.x+quakeX, this.y+quakeY);
      break;
      case 2:
        ctx.fillStyle = 'rgb(' + this.r  +',' + this.g + ',' + this.b + ')';
        ctx.fillRect(this.x+32-this.size/2, this.y+32-this.size/2,this.size,this.size)
        ctx.fillStyle = 'rgb(0,0,0)';
      break;
      }
  }
  bomb(){
    for(i=0;i<230;i++){
      let b = new Object(this.x+Math.floor(32*(Math.random()-0.5)),this.y+Math.floor(16*(Math.random()-0.5)));
      po = 1;
      yo = 1;
      quakeX =(50+Math.random()*70)* (2*Math.floor(Math.random())-1);
      quakeY =(50+Math.random()*70)* (2*Math.floor(Math.random())-1);
      b.arg = Math.PI - Math.PI/16+ Math.PI/2*vec + Math.random()*Math.PI/8;
      b.size = 20*Math.random()*Math.random();
      b.type = 2;
      if(this.type == 0){
        b.r = 200+Math.floor(50*Math.random());
        b.g = Math.floor(100*Math.random());
        b.b = Math.floor(100*Math.random());
      }
      else{
        b.r = 200+Math.floor(50*Math.random());
        b.g = 200+Math.floor(50*Math.random());
        b.b = Math.floor(100*Math.random());
      }
      b.vx = 50*Math.cos(b.arg)*Math.random();
      b.vy = 50*Math.sin(b.arg)*Math.random();
      Particles.push(b);
    }
  }
  update(){
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= (0.9-this.size*0.01);
    this.vy *= (0.9-this.size*0.01);
    if(this.type == 2){
      this.size*=0.90;
    }

  }

  
}

class Particle extends Object{

}
