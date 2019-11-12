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
    this.arg = 1;
    this.theta = 1;
    this.i;
    this.j;
    this.hz = 10;
  }

  draw(){
      ctx.beginPath();
      ctx.drawImage(banana, this.x, this.y);
  }

  update(){
    this.x += this.vx;
    this.y += this.vy;
  }

  
}

class Apple extends Object{
  draw(){
    ctx.save();
    ctx.translate(this.x+16,this.y+16);
    ctx.rotate(this.arg);
    ctx.drawImage(suika,-16,-16);
    ctx.restore();
  }

  update(){
    this.arg += .03;
    if(this.y+this.size>=400)this.vy*=-1;
    this.x += this.vx;
    this.y += this.vy;
    let vel = 5;
    if(input_key[37]){
      this.x-=vel;
    }
    if(input_key[38]){
      this.y-=vel;
    }
    if(input_key[39]){
      this.x+=vel;
    }
    if(input_key[40]){
      this.y+=vel;
    }
    this.x = Math.max(this.x,0);
    this.x = Math.min(this.x,400-32);
    this.y = Math.max(this.y,0);
    this.y = Math.min(this.y,400-32);
  }
}

class Wave extends Object{
  draw(){
    ctx.beginPath();
    ctx.strokeStyle = 'rgb('+this.r+','+ this.g+','+ this.b+')';
    for(this.i=0;this.i<5;this.i,this.i++){
      ctx.arc(this.x,this.y,this.size+this.i/2, 0, Math.PI*2,true );
    }
    ctx.stroke();
  }
  update(){
    this.size+=this.vx;
    this.r = Math.floor(128*(1 + Math.sin(timer/this.hz)));
    this.g = Math.floor(128*(1 + Math.sin(timer/this.hz)));
    this.b = Math.floor(128*(1 + Math.sin(timer/this.hz)));
    if(this.r > 172 && Math.abs((this.x-a.x-16)*(this.x-a.x-16)+(this.y-a.y-16)*(this.y-a.y-16) -this.size*this.size )<1001 ){
      state = 1;
    }
  }
}
