var canvas;

var t = 0;//タイマー


var ctx;
var isClicked = false;
var input_key = new Array();//キーの押下状態
var input_mouse = [false,0,0,0,0];//マウス入力 x座標、y座標、入力状態


var tempA;
var tempB;
var tempC;
var tempD;


var e = 1;//反発係数
var acc = 0.3//プレイヤーの加速度
var mu = 0.05//摩擦係数
var stv = mu + 0.01;//物体が止まる速さ

var state = 1;//ゲームオーバーの時0
var click = false;

var roof = 40;

function dist(x1,y1,x2,y2){
    return Math.pow((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2),0.5);
}

//物体クラス
function Entity(x,y){
  this.shape;
  this.id;
  this.gravity;
  this.vini =0;
  this.x = x;//this = player
  this.y = y;
  this.vx = 0;
  this.vy = this.vini;
  this.v=0;
  this.ax = 0;
  this.ay = 0;
  
  this.text;
  this.fontsize;

    
　//アローキーの入力
  this.input = function (){
    if(input_key[37]){
        this.vx -=0.1;    
    }  
    if(input_key[38]){
        if(!click){
            click = true;
            if(state == 1){
                
            }
        }
        
    }  
      
     if(input_key[39]){
        this.vx +=0.1;    
    }  
      
  }
  this.update_pos = function(){
  //  this.vx+= this.ax;
      var po = 2;
      if(this.vx>po) this.vx = po;
      if(this.vx< - po) this.vx = -po;
    this.x += this.vx;
    this.ay = this.gravity;
    this.vy+= this.ay;
    this.y += this.vy;
    
    this.ax = 0;
    this.ay = 0;
  }
  
  
  this.rub = function(){
    //摩擦
    this.v = Math.pow(this.vx*this.vx + this.vy*this.vy,0.5);
    if(this.v>stv){
       this.vx-=mu*this.vx/this.v;
       this.vy-=mu*this.vy/this.v;
    }
    else{
        this.vx = 0;
        this.vy = 0;
    }
  }
}
//box
function Box(x,y,w){
    this.shape = "BOX";
    this.size = w;//一片の長さ
    Entity.apply(this,arguments);//Entity.thisをBox.thisにする的な
}
Box.prototype = new Entity;//プロトタイプを経由してEntityから継承
Box.prototype.update = function(){
    this.input();
    this.update_pos();
    this.rub();
    
    //外枠の当たり判定(仮)
    if(this.x-this.size/2<1 || this.x+this.size/2>canvas.width-1){
        this.vx*=-e;
        (this.x-this.size/2<1)? this.x=this.size/2+1 : this.x=canvas.width-this.size/2-1;
    }
    if(this.y-this.size/2<roof || this.y+this.size/2>canvas.height-1){
        this.vy *= 0.6;
        (this.y-this.size/2<1) ? this.y=1+this.size/2 : this.y=canvas.height-this.size/2-1;
    }
    
}

//ball
function Ball(x,y,r){
    this.size = r;//半径
    this.shape = "BALL";
    Entity.apply(this,arguments);//Entity.thisをplayer.thisにする的な
}
Ball.prototype = new Entity;//プロトタイプを経由してEntityから継承
Ball.prototype.update = function(){

    this.update_pos();
    coll_ball(this);
    
    //外枠の当たり判定(仮)
   if(this.x-this.size/2<1 || this.x+this.size/2>canvas.width-1){
        this.vx*=-e;
        (this.x-this.size/2<1)? this.x=this.size/2+1 : this.x=canvas.width-this.size/2-1;
    }
    if(this.y-this.size/2<roof || this.y+this.size/2>canvas.height-1){
        if(this.y+this.size/2>canvas.height-1){
            this.vy = this.vini;
        }
        if(this.y-this.size/2<roof){
            this.vy *= -1;
        }
        (this.y-this.size/2<roof) ? this.y=roof+this.size/2 : this.y=canvas.height-this.size/2-1;
    }
    
}
var obj = new Array();
obj[0] = new Box(220,420,20);
obj[0].id = 0;
obj[0].text = "";
obj[0].fontsize = 10;
obj[0].gravity = 0.1;
obj[0].vini = -3;
obj[0].vy = obj[0].vini;

//衝突判定
function coll_box(ob){
    for(var i=0;i<ob.id;i++){
        //今の状態
        tempA = Math.abs(ob.x-obj[i].x)<=(ob.size+obj[i].size)/2;
        tempB = Math.abs(ob.y-obj[i].y)<=(ob.size+obj[i].size)/2;
        
        //直前の状態
        tempC = Math.abs(ob.x-ob.vx-obj[i].x+obj[i].vx)<=(ob.size+obj[i].size)/2;
        tempD = Math.abs(ob.y-ob.vy-obj[i].y+obj[i].vy)<=(ob.size+obj[i].size)/2;
        
      if(tempC){//後々のサイズ変更に対応
          if(tempB){
            //y方向の押しだし
            while(Math.abs(ob.y-obj[i].y)<=(ob.size+obj[i].size)/2+1){
                if(ob.y<obj[i].y){
                    ob.y--;
                    obj[i].y++;
                }
                else{
                    ob.y++;
                    obj[i].y--;
                }
                //反発
                
                tempA = ob.vy;
                ob.vy = ((1-e)*ob.vy + (1+e)*obj[i].vy)/2;
                obj[i].vy =((1+e)*tempA + (1-e)*obj[i].vy)/2;
            }
              
          }
      }
      if(tempD){//後々のサイズ変更に対応
          if(tempA){
              //x方向の押しだし
            while(Math.abs(ob.x-obj[i].x)<=(ob.size+obj[i].size)/2+1){
                if(ob.x<obj[i].x){
                    ob.x--;
                    obj[i].x++;
                }
                else{
                    ob.x++;
                    obj[i].x--;
                }
                //反発
                
                tempA = ob.vx;
                ob.vx = ((1-e)*ob.vx + (1+e)*obj[i].vx)/2;
                obj[i].vx =((1+e)*tempA + (1-e)*obj[i].vx)/2;
            }
              
          }
      }
    }
}

//衝突判定
function coll_ball(ob){
        //今の状態
        tempA = Math.abs(ob.x-obj[0].x)<=(ob.size+obj[0].size)/2;
        tempB = Math.abs(ob.y-obj[0].y)<=(ob.size+obj[0].size)/2;
        
      if(tempB && tempA){
          state = 0;
        }
              
}

//ロード時関数
onload = function(){
    canvas = document.getElementById('cv');
    ctx = canvas.getContext('2d');
}



//メイン関数
var main = function() {
    clear();
    input();
    
    switch(state){
        case 1:
            update();
            
            if(t % 50 ==  0){
                    for(var i = 0;i<1;i++){
                    var ball = new Ball(Math.random()*canvas.width,40,30);
    
                    obj.push(ball);     
                    ball.id = obj.length-1;
                    ball.text = "";
                    ball.fontsize = 30;
                    ball.gravity =  1/1024;
                    ball.vini =  -0.6 - Math.random()/2;
                    ball.vy =  ball.vini;
                    ball.vx = 1*(Math.random() - 0.5);
                }
                        }
            
            break;
        case 0:
            //ツイート
            if(input_key[84]){
                var score = ["https://twitter.com/intent/tweet?text=",obj.length-1, "匹の鰤を養殖しました！ https://uynet.github.io/traP3jam/3jam1 #traP3jam"] ;
                var con  =  score.join("");
                location.href = (con);
            }
            //再開
            if(input_key[38]){
                while(obj.length>1){
                    obj.pop();
                }
                state = 1;
                obj[0] = new Box(220,420,20);
                obj[0].id = 0;
                obj[0].text = "";
                obj[0].fontsize = 10;
                obj[0].gravity = 0.1;
                obj[0].vini = -3;
                obj[0].vy = obj[0].vini;
            }
            break;
        }

    draw();
    t++;
    
}
setInterval(main, 10);



function input(){

    document.onkeydown = function (e){
	    if(!e) e = window.event;
        input_key[e.keyCode] = true;
        e.preventDefault();
    }
    document.onkeyup = function (e){
        if(!e) e = window.event;
        input_key[e.keyCode] = false;
        click = false;
    }
    
}


//更新
function update() {
    for(var i=0;i<obj.length;i++){
        obj[i].update();
        
        
    }
}

//描画
function draw() {
    
        ctx.font = "20px 'ＭＳ Ｐゴシック'";
        ctx.fillStyle ="rgb(120,120,120)";
        
            var score = [obj.length-1, "匹"] ;
            var con  =  score.join("");
            
            ctx.fillText(con,10,30);
    for(var i=0;i<obj.length;i++){
        
        
        ctx.font = obj[i].fontsize.toString()+"px 'ＭＳ Ｐゴシック'";
        
        
        
        switch(obj[i].shape){               
            case "BALL":
            ctx.fillStyle ="rgb(180,180,180)";
            ctx.fillText("鰤",obj[i].x-15,obj[i].y+12);//中央に寄せて表示
            ctx.strokeStyle = "rgb(160,160,232)";
        
            /*
            ctx.beginPath();
            ctx.arc(obj[i].x,obj[i].y,obj[i].size/2,0,Math.PI*2,true);
            ctx.stroke();
            */
                
            break;
                
            case "BOX":
            ctx.fillStyle = "rgb(130,98,197)";
            ctx.fillText(obj[i].text,obj[i].x-(obj[i].fontsize-0.2)*(obj[i].text.length)/4,obj[i].y+4);//中央に寄せて表示
            ctx.strokeStyle = "rgb(130,98,197)";
            ctx.strokeRect(obj[i].x-obj[i].size/2,obj[i].y-obj[i].size/2,obj[i].size,obj[i].size);
            break;
        }
    }
    //結果
        if(state != 1){
            ctx.font = "20px 'ＭＳ Ｐゴシック'";
            ctx.fillStyle ="rgb(210,120,120)";
            ctx.fillText("死",80,30);
            ctx.font = "10px 'ＭＳ Ｐゴシック'";
            ctx.fillStyle ="rgb(96,96,96)";
            ctx.fillText("↑:もういちど   T:ついーとする",280,30);
            
        }
    
  //外枠
  ctx.strokeStyle = "rgb(130,128,222)"
  ctx.strokeRect(0,40,canvas.width,canvas.height-40);
}

//クリア
function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}




