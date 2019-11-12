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
      ctx.drawRect(this.x-100, this.y-100,200,200);
  }

  update(){
    this.x += this.vx;
    this.y += this.vy;
  }
}

class Apple extends Object{
  draw(){
    ctx.save();
    ctx.translate(this.x+100,this.y+100);
    ctx.rotate(this.arg);
    ctx.fillStyle = "rgb(200,100,100)";
    ctx.fillRect(-50,-50,100,100);
    ctx.restore();
  }

  update(){
    if(this.y+this.size>=400)this.vy*=-1;
    this.x += this.vx;
    this.y += this.vy;
    let vel = 5;
    if(input_key[37]){
      if(click_key[37]){
        g = ease();
        click_key[37]=false;
      }
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
    this.arg = (g.next().value*Math.PI/2);
    this.x = Math.max(this.x,0);
    this.x = Math.min(this.x,400-32);
    this.y = Math.max(this.y,0);
    this.y = Math.min(this.y,400-32);
  }
}

