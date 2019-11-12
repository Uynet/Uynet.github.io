var canvas;


var ctx;
var isClicked = false;
var input_key = new Array();//キーの押下状態
var input_mouse = [false,0,0,0,0];//マウス入力 x座標、y座標、入力状態
let t = 0;

let Map = [
	["1","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","3"]


];

//物体クラス
function Entity(x,y){
  this.id;
  this.x = x;//this = player
  this.y = y;
    
　//アローキーの入力
  this.input = function (){
          
    //Zkeyの入力
    if(input_key[90]){
       
    }  
  }
  
}
//box
function Node(x,y){
    Entity.apply(this,arguments);//Entity.thisをBox.thisにする的な
}
Node.prototype = new Entity;//プロトタイプを経由してEntityから継承
Node.prototype.update = function(){
    this.input();
    this.rub();
    coll_box(this);
}
var obj = new Array();
obj[0] = new Node(0,0);
obj[0].id = 0;

//fire
var obj2 = new Array();


//ロード時関数
onload = function(){
    canvas = document.getElementById('cv');
    ctx = canvas.getContext('2d');
    for(var i=0;i<18;i++){
        let landy = Math.floor( Math.random() * 11 );
        let landx = Math.floor( Math.random() * 11 );
        Map[landy][landx] = 2;
        obj2.push( new Node(landx*40,landy*40) );
    }
}



//メイン関数
var main = function() {
    clear();
    input();
    update();
    draw();
    t++;
}
setInterval(main, 10);



function input(){
    document.onkeydown = function (e){
	    if(!e) e = window.event;
        input_key[e.keyCode] = true;
        console.log(e.keyCode);
    }
    document.onkeyup = function (e){
        if(!e) e = window.event;
        input_key[e.keyCode] = false;
    }


    
    
}


//更新
function update() {
    if(t%100 == 0){
        console.log(t);
        let len = obj.length
       for(var i=0;i<len;i++){
           
           if(obj[i].y/40<10){
                //↓
                if(Map[obj[i].y/40 +1][obj[i].x/40] == "0"){
                    obj.push( new Node(obj[i].x,obj[i].y + 40) );
                    Map[obj[i].y/40 +1][obj[i].x/40] = 1;
                }
           }
           
           if(obj[i].x/40<10){
                //→
                if(Map[obj[i].y/40][obj[i].x/40+1] == "0"){
                    obj.push( new Node(obj[i].x+40,obj[i].y) );
                    Map[obj[i].y/40][obj[i].x/40+1] = 1;
                }
           }
           
//           if(obj[i].y/40>0){
//                //↑
//                if(Map[obj[i].y/40-1][obj[i].x/40] == "0"){
//                    obj.push( new Node(obj[i].x,obj[i].y-40) );
//                    Map[obj[i].y/40-1][obj[i].x/40] = 1;
//                }
//           }
//           
//           if(obj[i].x/40>0){
//                //↑
//                if(Map[obj[i].y/40][obj[i].x/40-1] == "0"){
//                    obj.push( new Node(obj[i].x-40,obj[i].y40) );
//                    Map[obj[i].y/40][obj[i].x/40-1] = 1;
//                }
//           }
           
        }   
    }
}

//描画
function draw() {
        for(var i=0;i<obj.length;i++){
            ctx.fillStyle = "rgb(120,198,120)";
            ctx.fillRect(obj[i].x+2,obj[i].y+2,38,38);
        }
        
        for(var i=0;i<obj2.length;i++){
            ctx.fillStyle = "rgb(158,60,60)";
            ctx.fillRect(obj2[i].x+2,obj2[i].y+2,38,38);
            
        }
    
    
    
  //外枠
  ctx.strokeStyle = "rgb(130,128,222)"
  ctx.strokeRect(0,0,canvas.width,canvas.height);
}

//クリア
function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}




