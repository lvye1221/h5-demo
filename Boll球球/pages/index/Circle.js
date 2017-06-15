
function Circle(xPoint, yPoint, paint) {
	this.x = xPoint;
	this.y = yPoint;

	//随机产生一个－3～3的值
	this.xVal = Math.random() * 6 - 3;
	this.yVal = 5;
	this.gravity = 0.05;

	// console.log("2:", this.xVal, this.yVal);

	var self = this;

	//定义一个方法用于更新圆的位置
	this.update = function () {

		console.log("this.update", paint);

		self.x = self.x - self.xVal;
		self.y = self.y - self.yVal;
		self.yVal = self.yVal - self.gravity;

		// 随机颜色
		var r = parseInt(Math.random() * 256);
		var g = parseInt(Math.random() * 256);
		var b = parseInt(Math.random() * 256);

		var colorStr = "rgb(" + r + "," + g + "," + b + ")";

		// 设置填充颜色
		paint.setFillStyle(colorStr);
		
		//开始画圆
		paint.beginPath();
		// 参数一，参数二：圆点  参数三：半径 参数四：开始的角度  参数五：结束的角度  参数六：画的顺序
		paint.arc(self.x, self.y, 10, 0, Math.PI * 2, false);
		// paint.fillRect(10, 70, 100, 30);
		paint.closePath();
		//设置圆为实心的
		paint.fill();
	}
}

// 这样暴露接口，这里不暴露是不能引用的，
module.exports.Circle = Circle; 

