//index.js
//获取应用实例
var app = getApp()

Page({
	data: {
		showPage1: true,
		currentItem: 1,
		mins: 25  // 目标分钟值
	},

	// current 为当前进度值
	timerDraw: function (current) {
		var target = this.data.mins * 60;

		var deta = current / target * (Math.PI * 2) - Math.PI * 1/2; 
		
		// 计时圈
		this.drawCircle({
			r: this.w/4,
			lineWidth: 3,
			strokeStyle: "#FFFFFF",
			endDegree: deta
		});

		// 保留原有图形来画
		this.paint.draw(true)
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
		this.paint.setStrokeStyle("#6C92B8");
		if (obj.strokeStyle) {
			this.paint.setStrokeStyle(obj.strokeStyle);
		}
		
		if (obj.lineWidth) {
			this.paint.setLineWidth(obj.lineWidth)
		}

		var start = Math.PI * -1/2
		var end = Math.PI * 3/2
		if (obj.endDegree) {
			end = obj.endDegree
		}

		//开始画圆
		this.paint.beginPath();
		// 参数一，参数二：圆点  参数三：半径 参数四：开始的角度  参数五：结束的角度  参数六：画的顺序
		this.paint.arc(this.w/2, this.h/2.5, obj.r, start, end, false);
		// this.paint.closePath();

		//设置圆为实心的
		this.paint.stroke();
	},

	onLoad: function() {
		wx.getSystemInfo({
		  success: (res) => {
			this.w = res.windowWidth
			this.h = res.windowHeight

			//获取一只画笔
			this.paint = wx.createCanvasContext('timer')

			this.init();

			var current = 0;
			setInterval(() => {
				current ++;
				
				this.timerDraw(current)

			}, 100);
		  }
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
