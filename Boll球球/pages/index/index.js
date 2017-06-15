
var Circle = require("Circle.js");

//index.js
//获取应用实例
var circles = [];
var app = getApp()
Page({
	data: {
		context: null,
		circles: [],
		systemInfo: {}
	},

	drawSmile: function () {

		this.context.setStrokeStyle("#00ff00")
		this.context.setLineWidth(5)
		this.context.rect(0, 0, 200, 200)
		this.context.stroke()
		this.context.setStrokeStyle("#ff0000")
		this.context.setLineWidth(2)
		this.context.moveTo(160, 100)
		this.context.arc(100, 100, 60, 0, 2 * Math.PI, true)
		this.context.moveTo(140, 100)
		this.context.arc(100, 100, 40, 0, Math.PI, false)
		this.context.moveTo(85, 80)
		this.context.arc(80, 80, 5, 0, 2 * Math.PI, true)
		this.context.moveTo(125, 80)
		this.context.arc(120, 80, 5, 0, 2 * Math.PI, true)
		this.context.stroke()
		this.context.draw()
	}, 

	drawCircle: function () {

		if (circles.length > 100) {

			// 删除之前旧的点
			circles.shift();

			console.log(circles.length);
		}

		console.log(this.systemInfo);

		// 获取当前手机的信息
		var systemInfo = this.systemInfo;


		// 清空画布
		this.context.clearRect(0, 0, systemInfo.windowWidth, systemInfo.windowHeight);

		var x = systemInfo.windowWidth / 2;
		var y = systemInfo.windowHeight / 2;

		// 创建一个球
		var c = new Circle.Circle(x, y, this.context);

		
		// 存到系统中
		circles.push(c);

		for (var i = 0; i < circles.length; i++) {
			circles[i].update();
		}

		this.context.draw()

	},

	onReady: function () {
		// 使用 wx.createContext 获取绘图上下文 context
		this.context = wx.createCanvasContext('firstCanvas');

		// this.drawSmile();
		// this.drawCircle();

		var that = this;

		wx.getSystemInfo({
			success: (res) => {

				var systemInfo = {};

				systemInfo.windowWidth = res.windowWidth;
				systemInfo.windowHeight = res.windowHeight;

				this.systemInfo = systemInfo;

				setInterval(this.drawCircle, 100);			  
			}
		})	  

	}
})
