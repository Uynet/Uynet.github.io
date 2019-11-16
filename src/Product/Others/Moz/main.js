var canvas;
var ctx;
var isClicked = false;
var click = false;
var input_key = new Array(); //キーの押下状態

var tempA;
var tempB;
var tempC;
var tempD;

var shakeX = 0;
var shakeY = 0;
var trig = 0;
var trig_tail = 0;

var tail = new Array();

var MAX_VX = 3;
var MAX_VY = 50;

var Map = [
  ["1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["1", "0", "0", "1", "1", "1", "1", "0", "1", "1", "1", "0", "0", "0", "1"],
  ["1", "0", "0", "1", "1", "1", "1", "0", "1", "1", "1", "0", "0", "0", "1"],
  ["1", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "1"],
  ["1", "0", "E", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1"],
  ["1", "0", "0", "1", "1", "1", "1", "0", "0", "0", "0", "E", "0", "0", "1"],
  ["1", "0", "0", "0", "0", "0", "0", "0", "E", "0", "1", "1", "1", "0", "1"],
  ["1", "0", "0", "0", "0", "1", "1", "1", "1", "0", "0", "0", "0", "0", "1"],
  ["1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1"],
  ["1", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1"],
  ["1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1"],
  ["1", "0", "0", "0", "0", "0", "0", "0", "E", "0", "0", "0", "0", "0", "1"],
  ["1", "0", "0", "0", "0", "0", "1", "0", "1", "1", "1", "0", "0", "P", "1"],
  ["1", "E", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1"],
  ["1", "1", "1", "1", "1", "0", "0", "1", "1", "0", "1", "1", "0", "1", "1"]
];
var x = 0;
var y = 0;

//物理
var t = 0;
var acc = 3; //プレイヤーの加速度
var mu = 4;
var stv = 10;

var eff = new Array();

function dist(x1, y1, x2, y2) {
  return Math.pow((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2), 0.5);
}
//継承
/*
Entity
|-Mover
|   |-Player
|   +-Enemy-*各種enemy
|
|-Wall-*各種wall

#当たり判定なし
|-Effect

#画面振動
ほしい場所でshake_trigerを呼ぶ
shake_trigerがtrigerを引いてくれる
一定時間shakeが発動する
*/

//物体クラス
function Entity(x, y) {
  this.id;
  this.x = x; //this = player
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.v = 0;
  this.ax = 0;
  this.ay = 0;
  this.gravity = 0.4;

  this.flip = false; //flip
  this.feel = false; //落下
  this.pop = false; //跳ねる
  this.landing = !this.flip && !this.feel && this.pop;
  this.setBox = function(x, y, w, h) {
    return new Box(x, y, w, h);
  };
  //残像
  this.tailing = function(player) {
    if (Math.random() < 1) {
      var ob = new Effect(player.x, player.y, -10 * Math.random());

      //ずれ
      ob.dpx = (Math.random() - 0.5) * 16;
      ob.dpy = (Math.random() - 0.5) * 16;

      eff.push(ob);
      ob.id = obj.length - 1;
    }
  };
}

///Mover
function Mover(x, y) {
  this.size = 32; //一片の長さ
  this.update_pos = function() {
    this.vx += this.ax;
    this.x += this.vx;
    this.vy += this.ay;
    this.y += this.vy;
    this.id = obj.length - 1;
  };
  Entity.apply(this, arguments);
}
Mover.prototype = new Entity(); //プロトタイプを経由してEntityから継
Mover.prototype.update = function() {
  this.update_pos;
};

///Box
function Box(x, y, w, h) {
  this.w = w; //一片の長さ
  this.h = h;
  this.l = x;
  this.r = this.l + w;
  this.t = y;
  this.b = this.t + h;
}

//プレイヤークラス
function Player(x, y, w) {
  this.size = w; //一片の長さ //アローキーの入力
  //左
  this.input = function() {
    if (input_key[37]) {
      this.ax = -MAX_VX < this.vx ? -acc : 0;
      //跳ねる
      if (this.landing) {
        this.vy -= 4 * this.gravity;
        this.pop = true;
      }
    }
    //autoflip
    if (true) {
      if (this.landing && !click) {
        this.vy = -40 * this.gravity;
        this.flip = true;
        this.gravity *= -1;
        shaker_trigger(20);
        trig_tail = 1;
        click = 1;
      }
    }
    //右
    if (input_key[39]) {
      this.ax = this.vx < MAX_VX ? acc : 0;
      //歩くたびに跳ねる
      if (this.landing) {
        this.vy -= 4 * this.gravity;
        this.pop = true;
      }
    }
  };

  this.update_pos = function() {
    this.landing = !this.flip && !this.feel && !this.pop;
    this.vx += this.ax;
    this.x += this.vx;

    //最大速さ制限
    if (this.landing == false) {
      this.vy =
        Math.abs(this.vy) < MAX_VY
          ? this.vy + this.ay + this.gravity
          : (MAX_VY * this.vy) / Math.abs(this.vy);
    }
    this.y = this.y + this.vy;
    this.ax = 0;
    this.ay = 0;
  };

  this.rub = function() {
    if (this.landing) {
      if (Math.abs(this.vx) > stv) {
        this.vx = this.vx < 0 ? (this.vx += mu) : (this.vx -= mu);
      } else {
        this.vx = 0;
      }
    }
  };

  this.id = obj.length - 1;
  Entity.apply(this, arguments); //Entity.thisをPlayer.thisにする的な
}
Player.prototype = new Entity(); //プロトタイプを経由してEntityから継承
Player.prototype.update = function() {
  this.input();
  this.update_pos();

  for (var i = 0; i < obj.length; i++) {
    if (obj[i] instanceof Wall) {
      if (
        this.y + 16 > obj[i].y &&
        this.y < obj[i].y + obj[i].size &&
        this.x + 16 > obj[i].x &&
        this.x < obj[i].x + obj[i].size
      ) {
        //y面で衝突した
        if (
          obj[i].x - 16 < this.x - this.vx &&
          this.x - this.vx < obj[i].x + obj[i].size
        ) {
          while (obj[i].y < this.y + 16 && this.y < obj[i].y + obj[i].size) {
            this.y -= this.gravity / Math.abs(this.gravity);
          }

          if (this.flip) {
            trig_tail = 0;
          }
          this.flip = false;
          this.pop = false;
          this.feel = false;
          this.vy = 0;

          /*
                    this.vy *= -0.1;//着地時の反発
                    //反発が一定以上ならflipをon それ以外ならｖを0にしてflipを切る

                    if (Math.abs(this.vy) >= 0.01) {
                        this.flip = true;
                    }
                    else {
                        this.vy = 0;
                    }
                    */
        }
        //x面で衝突した
        else {
          while (this.x + 16 > obj[i].x && this.x < obj[i].x + obj[i].size) {
            this.x -= this.vx / Math.abs(this.vx);
          }

          this.vx = 0;
        }
      }
    }
  }
  this.rub();
  if (trig_tail) {
    this.tailing(this);
  }
};
//TODO
//もっと便利なデータ構造を作る
var obj = new Array();

//敵クラス
function Enemy(x, y, w) {
  this.size = w; //一片の長さ

  this.update_pos = function() {
    this.vx += this.ax;
    this.x += this.vx;
    this.vy += this.ay + this.gravity;
    this.y += this.vy;

    this.ax = (Math.random() - 0.5) / 40;
    this.ay = Math.random();
    this.id = obj.length - 1;
  };
  Entity.apply(this, arguments); //Entity.thisをPlayer.thisにする的な
}
Enemy.prototype = new Entity(); //プロトタイプを経由してEntityから継承
Enemy.prototype.update = function() {
  this.update_pos();
  for (var i = 1; i < obj.length; i++) {
    if (
      coll_box(
        this.setBox(this.x, this.y, 16, 16),
        this.setBox(obj[i].x, obj[i].y, 16, 16)
      )
    ) {
      if (obj[i] instanceof Wall) {
        this.vy = -0.1;
        /*応急処置*/
        while (
          coll_box(
            this.setBox(this.x, this.y, 16, 16),
            this.setBox(obj[i].x, obj[i].y, 16, 16)
          )
        ) {
          this.y -= this.gravity / Math.abs(this.gravity);
        }
        this.flip = false;
      }
    }
  }
};

///壁クラス
//四角い壁
function Wall(x, y) {
  this.size = 32; //一片の長さ
  this.update_pos = function() {}; //ダミー
  Entity.apply(this, arguments); //Entity.thisをPlayer.thisにする的な
}
Wall.prototype = new Entity(); //プロトタイプを経由してEntityから継承
Wall.prototype.update = function() {
  this.update_pos;
};

//マップ描画部分
for (var y = 0; y < 15; y++) {
  for (var x = 0; x < 15; x++) {
    switch (Map[y][x]) {
      case "1":
        obj.push(new Wall(32 * x, 32 * y, 32));
        break;
      case "P":
        obj.push(new Player(32 * x, 32 * y, 16));
        break;
      case "E":
        obj.push(new Enemy(32 * x, 32 * y, 16));
        break;
    }
  }
}

//エフェクトクラス
function Effect(x, y, w) {
  this.size = 32; //初期サイズ
  this.alpha = 1;
  this.time; //
  this.dpx;
  this.dpy;

  this.update_pos = function() {
    this.size = 1 / (0.009 + 1 / this.size); //エフェクトの減衰率
    this.y -= 3 * obj[0].gravity;

    if (this.size < 1) {
      //小さくなったら消す
      eff.shift();
    }
    this.alpha *= 0.94; //叙々に透明になる
  };
  Entity.apply(this, arguments);
}
Effect.prototype = new Entity(); //プロトタイプを経由してEntityから継承
Effect.prototype.update = function() {
  this.update_pos();
};

function coll_box(boxA, boxB) {
  if (
    boxA.b > boxB.t &&
    boxB.b > boxA.t &&
    boxA.r > boxB.l &&
    boxB.r > boxA.l
  ) {
    delete boxA;
    delete boxB;
    return 1;
  } else {
    delete boxA;
    delete boxB;
    return 0;
  }
}

//箱と点
function coll_dot(box, x, y) {
  if (box.l < x && x < box.r && box.t < y && y < box.b) {
    return 1;
  } else return 0;
}

//押し戻し関数
function push(hit) {
  //yの押し戻し
  if (hit == 1) {
  }
}

//ロード時関数
onload = function() {
  canvas = document.getElementById("cv");
  ctx = canvas.getContext("2d");
};

//メイン関数
var main = function() {
  clear();
  input();

  update();

  draw();
};
setInterval(main, 10);

function update() {
  for (var i = 0; i < obj.length; i++) {
    obj[i].update();
  }
  for (var i = 0; i < eff.length; i++) {
    eff[i].update();
  }
  if (trig) {
    shaker(trig);
  }
}

function input() {
  document.onkeydown = function(e) {
    if (!e) e = window.event;
    input_key[e.keyCode] = true;
  };
  document.onkeyup = function(e) {
    if (!e) e = window.event;
    input_key[e.keyCode] = false;
    click = 0;
  };
}

function shaker_trigger(amp) {
  trig = amp;
}

function shaker(amp) {
  t += Math.random();
  shakeX = amp * Math.sin(t) * 0.3;
  t += Math.random();
  shakeY = amp * Math.cos(t);
  trig *= 0.85;
  if (trig < 5) {
    shakeX = 0;
    shakeY = 0;
    trig = 0;
    t = 0;
  }
}

//描画
function draw() {
  for (var i = 0; i < obj.length; i++) {
    if (obj[i] instanceof Player) {
      ctx.strokeStyle = "rgb(130,98,197)";
      ctx.strokeRect(
        obj[i].x + shakeX,
        obj[i].y + shakeY,
        obj[i].size,
        obj[i].size
      );
      //var img = new Image();
      // img.src = "img.png";
      //ctx.drawImage(img, obj[i].x, obj[i].y);
    }
    if (obj[i] instanceof Enemy) {
      ctx.fillStyle = "rgb(160,98,100)";
      ctx.fillText("敵", obj[i].x + shakeX + 3, obj[i].y + shakeY + 12);
      ctx.strokeStyle = "rgb(160,98,100)";
      ctx.strokeRect(
        obj[i].x + shakeX,
        obj[i].y + shakeY,
        obj[i].size,
        obj[i].size
      );
      //var img = new Image();
      // img.src = "img.png";
      //ctx.drawImage(img, obj[i].x, obj[i].y);
    }
    if (obj[i] instanceof Wall) {
      ctx.strokeStyle = "rgb(140,140,140)";
      ctx.strokeRect(
        obj[i].x + shakeX,
        obj[i].y + shakeY,
        obj[i].size,
        obj[i].size
      );
      //var img = new Image();
      // img.src = "img.png";
      //ctx.drawImage(img, obj[i].x, obj[i].y);
    }
  }

  //エフェクトの描画
  for (var i = 0; i < eff.length; i++) {
    if (eff[i] instanceof Effect) {
      //ctx.strokeStyle = "rgb(255-105/eff[i].alpha,255-33/eff[i].alpha,255-105/eff.alpha)";

      tempA = Math.round(220).toString();
      tempB = Math.round(150).toString();
      tempC = Math.round(150).toString();
      ctx.strokeStyle = "rgb(" + tempA + "," + tempB + "," + tempC + ")";

      ctx.beginPath();
      ctx.globalAlpha = eff[i].alpha;

      ctx.arc(
        eff[i].x + 8 + eff[i].dpx,
        eff[i].y + eff[i].dpy,
        eff[i].size,
        0,
        Math.PI * 2,
        true
      );
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  //外枠
  ctx.strokeStyle = "rgb(130,128,222)";
  ctx.strokeRect(shakeX, shakeY, canvas.width, canvas.height);
  ctx.restore();
}

//クリア
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
