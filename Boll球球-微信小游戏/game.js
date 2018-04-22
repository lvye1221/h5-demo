var canvas = wx.createCanvas()

// var context = canvas.getContext('2d')
// context.fillStyle = 'red'
// context.fillRect(100, 100, 100, 100)

/*
var paint = canvas.getContext('2d')

paint.strokeStyle = "black";

paint.beginPath();
paint.lineTo(0, 0);
paint.lineTo(100, 100);
paint.stroke();



var x = 200
var y = 200

paint.fillStyle = "red";
//开始画圆
paint.beginPath();
// 参数一，参数二：圆点  参数三：半径 参数四：开始的角度  参数五：结束的角度  参数六：画的顺序
paint.arc(x, y, 100, 0, Math.PI * 2, false);
paint.closePath();

//设置圆为实心的
paint.fill();


// paint.strokeRect(origin.x, origin.y, size.width, size.height);

// paint.fill();
//*/


/*
var cxt = canvas.getContext('2d')
//绘制左侧的白色半圆直径都是150
cxt.fillStyle = "#FFFFFF";
cxt.beginPath();
cxt.arc(300, 200, 150, 1.5 * Math.PI, Math.PI / 2, false);
cxt.closePath();
cxt.fill();
//绘制右侧的黑色半圆
cxt.fillStyle = "#000000";
cxt.beginPath();
cxt.arc(300, 200, 150, Math.PI / 2, 1.5 * Math.PI, false);
cxt.closePath();
cxt.fill();
//绘制下面的黑色圆
cxt.fillStyle = "#000000";
cxt.beginPath();
cxt.arc(300, 275, 75, 0, 2 * Math.PI, false);
cxt.closePath();
cxt.fill();
//绘制上面的白色圆
cxt.fillStyle = "#FFFFFF";
cxt.beginPath();
cxt.arc(300, 125, 75, 0, 2 * Math.PI, false);
cxt.closePath();
cxt.fill();
//绘制两个小圆
cxt.fillStyle = "FFFFFF";
cxt.beginPath();
cxt.arc(300, 275, 10, 0, 2 * Math.PI, false);
cxt.closePath();
cxt.fill();
//绘制黑色小圆
cxt.fillStyle = "#000";
cxt.beginPath();
cxt.arc(300, 125, 10, 0, 2 * Math.PI, false);
cxt.closePath();
cxt.fill();
//*/

var paint = canvas.getContext("2d");

var circles = [];

//创建一个圆“类”
function circle(x, y) {
  this.x = x;
  this.y = y;
  //随机生成，X轴的变化值
  this.xVar = Math.random() * 6 - 3;
  this.yVar = 5;
  this.gravity = 0.05;
  this.update = function () {

    //设置一下画笔的颜色
    //paint.fillStyle="cyan";	
    var num = Math.random() * 16 * 16 * 16 * 16 * 16 * 16 - 1;
    num = Math.floor(num);
    paint.fillStyle = "#" + num.toString(16);

    //开始画东西
    paint.beginPath();
    //随机一个宽度， Math.randow()的区间为0~1 不包括1，乘以窗口的宽度，即0到窗口的宽度
    //		var x=Math.random()*window.innerWidth;
    //		var y=Math.random()*window.innerHeight;

    this.y = this.y - this.yVar;
    this.x = this.x + this.xVar;
    this.yVar = this.yVar - this.gravity;


    //从底部弹起来
    if (this.y >= window.innerHeight) {
      this.yVar = 5;
    }
    //画圆 圆心的XY坐标  半径  开始角度（以弧度计）  结束角度  画的方向  flase(可选，表示顺时针画图，true 表示逆时针)
    paint.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
    //画完了
    paint.closePath();
    //填充一下
    paint.fill();
  }
}

var window  = {
  innerWidth: canvas.width,
  innerHeight: canvas.height
}

console.log(window.innerWidth)
console.log(window.innerHeight)

//定时器
setInterval(drawcircle, 60);
function drawcircle() {
  paint.clearRect(0, 0, window.innerWidth, window.innerHeight);
  paint.fillStyle = 'white'
  paint.fillRect(0, 0, window.innerWidth, window.innerHeight);
  //新建一个圆对象。
  var c = new circle(window.innerWidth / 2, window.innerHeight - 50);
  //把新建的圆存起来
  circles.push(c);
  //调用这个对象的方法
  for (var i = 0; i < circles.length; i++) {
    //更新每一个圆的坐标
    circles[i].update();
  }
}