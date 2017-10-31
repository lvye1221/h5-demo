//index.js
//获取应用实例
var app = getApp()

Page({
	data: {
		showPage1: true,
		currentItem: 1,
		strTime: "00:00", // 时间字符串
		mins: 1  // 目标分钟值
	},

	

	// current 为当前进度值
	timerDraw: function (current, target) {
		// 计算当前值在目标值中的百分比占用情况
		var deta = current / target 

		// 角度转换
		deta *= (Math.PI * 2); 
		deta -= (Math.PI * 0.5); 
		
		// 计时圈
		this.drawCircle({
			r: this.w/4,
			lineWidth: 3,
			strokeStyle: "#FFFFFF",
			endDegree: deta
		});

		// 保留原有图形来画
		this.paint.draw(true)

		var t = target - current;
		var min = parseInt(t / 60);
		if (min < 10) {
			min += "0"
		}
		var sec = parseInt(t % 60);
		if (sec < 10) {
			sec += "0"
		}
		
		this.setData({
			strTime: min + ':' + sec
		})
	},

	// 点击按钮
	startClock: function() {
		// console.log("startClock");
		// wx.navigateTo({
		// 	url: '/pages/clock/clock'
		// })
		
		// 显示计时的子栏目
		this.setData({
			showPage1: false
		});
		
		this.init();

		if (this.timer) {
			clearInterval(this.timer)
		}


		var current = 0;
		var target = this.data.mins * 60;

		this.timer = setInterval(() => {
			current ++;
			if (current == target) {
				clearInterval(this.timer);
			}
			
			this.timerDraw(current, target)
		}, 500);
	},


	init: function() {

		// 外环
		this.drawCircle({
			r: this.w/2.5,
			strokeStyle: "#5584AF"
		});

		// 中环
		this.drawCircle({
			r: this.w/3
		});

		// 内环
		this.drawCircle({
			r: this.w/4,
			lineWidth: 3
		});

		
		// 计时圈
		this.drawCircle({
			r: this.w/4,
			lineWidth: 3,
			strokeStyle: "#FFFFFF",
			endDegree: - Math.PI * 1/2
		});

		// 更新到页面
		this.paint.draw()
	},

	drawCircle: function(obj) {
		
		// 画笔颜色
		this.paint.setStrokeStyle("#6C92B8");
		if (obj.strokeStyle != undefined) {
			this.paint.setStrokeStyle(obj.strokeStyle);
		}
		
		// 画笔宽度
		if (obj.lineWidth != undefined) {
			this.paint.setLineWidth(obj.lineWidth)
		}

		// 圆弧起始角度
		// 起始角度由于是从正中心开始，所以从 -Math.PI/2 开始画
		var start = Math.PI * -1/2
		var end = Math.PI * 3/2
		if (obj.endDegree != undefined) {
			end = obj.endDegree
		}

		//开始画圆
		this.paint.beginPath();
		// 参数一，参数二：圆点  参数三：半径 参数四：开始的角度  参数五：结束的角度  参数六：画的顺序
		this.paint.arc(this.w/2, this.h/2.5, obj.r, start, end, false);
		// 不用关闭路径，否则会连接起点和终点。
		// this.paint.closePath();

		//设置圆为空心圆
		this.paint.stroke();
	},

	onLoad: function() {
		wx.getSystemInfo({
		  success: (res) => {
			this.w = res.windowWidth
			this.h = res.windowHeight

			//获取一只画笔
			this.paint = wx.createCanvasContext('timer')

		  }
		})
	
	},

	// 点击按钮
	endClock: function() {
		
		// 显示计时的子栏目
		this.setData({
			showPage1: true
		});
	},


	// 切换子栏目的按钮
	tapItem: function(event) {
		console.log("tap");

		this.setData({
			currentItem: event.currentTarget.dataset.id
		});

	}
})
