//index.js
//获取应用实例
var app = getApp()
Page({
	data: {
		scale: 15,
		latitude: 0,
		longitude: 0,
		controls: [{
			// 警告标题
			id: 1,
			iconPath: "/ofo_img/tip_icon.png",
			position: {
				left: 48,
				top: 60,
				width: 250,
				height: 50,
			},
			clickable: true,
		}, {
			id: 2,
			// 警告按钮
			iconPath: "/ofo_img/alarm_icon.png",
			position: {
				left: 34,
				top: 68,
				width: 30,
				height: 30,
			},
			clickable: true,
		}, {
			id: 3,
			iconPath: "/ofo_img/yuanpan.png",
			position: {
				left: 0,
				top: 0.65,
				width: 0,
				height: 0.35,
			},
			clickable: true,
		}, {
			id: 4,
			// 隐藏转盘按钮
			iconPath: "/ofo_img/hide_icon.png",
			position: {
				left: 0.45,
				top: 0.7,
				width: 0.1,
				height: 20,
			},
			clickable: true,
		}, {
			id: 5,
			iconPath: "/ofo_img/personal_icon.png",
			position: {
				left: 0.1,
				top: 0.85,
				width: 30,
				height: 30,
			},
			clickable: true,
		}, {
			id: 6,
			// 扫码按钮
			iconPath: "/ofo_img/ride_icon.png",
			position: {
				left: 0.35,
				top: 0.75,
				width: 0.3,
				height: 0.3,
			},
			clickable: true,
		}, {
			id: 7,
			// 礼物页面
			iconPath: "/ofo_img/activity_icon.png",
			position: {
				left: 0.8,
				top: 0.85,
				width: 30,
				height: 30
			},
			clickable: true,
		}, {
			id: 8,
			// 定位图标
			iconPath: "/ofo_img/positioning_icon.png",
			position: {
				left: 0.85,
				top: 0.5,
				width: 0.12,
				height: 0.12,
			},
			clickable: true,
		}, {
			id: 9,
			// 服务页面
			iconPath: "/ofo_img/service_icon.png",
			position: {
				left: 0.85,
				top: 0.58,
				width: 0.12,
				height: 0.12,
			},
			clickable: true,
		}]
	},

	// 更新单车位置
	updateMarkers: function(res) {

		console.log(res.longitude);
		console.log(res.latitude);

		var markers = {
			"data": [
				// {
				// 	"id": 0,
				// 	"title": "去这里",
				// 	"iconPath": "/images/markers.png",
				// 	"latitude": 28.714621,
				// 	"longitude": 115.82749,
				// 	"width": 45,
				// 	"height": 50
				// }
			]
		};

		for (var i = 0; i < 10; i++) {
			var mark = {
				"id": i,
				"title": "去这里",
				"iconPath": "/images/markers.png",
				"latitude": res.latitude + (Math.random() - 0.5) / 100,
				"longitude": res.longitude + (Math.random() - 0.5) / 100,
				"width": 45,
				"height": 50
			};

			markers.data.push(mark);
		}


		console.log(markers);

		this.setData({
			markers: markers.data
		});

	},

	onLoad: function () {


		// 1.页面初始化 options为页面跳转所带来的参数

		// 2.调用wx.getLocation系统API,获取并设置当前位置经纬度
			// ...已省略

		wx.getLocation({
			type: "gcj02",
			// 获取经纬度成功回调

			// es6 箭头函数，可以解绑当前作用域的this指向，使得下面的this可以绑定到Page对象
			success: (res) => { 
				console.log(res.longitude);
				console.log(res.latitude);

				// res.longitude = 90;

				// 为data对象里定义的经纬度默认值设置成获取到的真实经纬度，这样就可以在地图上显示我们的真实位置
				this.setData({  
					longitude: res.longitude,
					latitude: res.latitude
				});

				// 产生随机 标记位置
				// console.log(this.data.latitude);

				this.updateMarkers(res);
			}
		});


		// 3.设置地图控件的位置及大小，通过设备宽高定位
		//this代表当前页面，定义self获取当前页面
		var self = this;
		
		//获取当前手机信息
		wx.getSystemInfo({
			success: res => {
				let mywidth = res.windowWidth;
				let myheight = res.windowHeight;

				//controls:[{},{},...]---在地图上显示控件，控件不随着地图移动
				let controls = this.data.controls;

				//  console.log(controls)

				// 根据手机型号来调整图标的位置
				controls[0].position.left = mywidth - 48;

				controls[1].position.left = mywidth - 34;

				controls[2].position.top = myheight * 0.65;
				controls[2].position.width = mywidth;
				controls[2].position.height = myheight * 0.35;
				
				controls[3].position.left = mywidth * 0.45;
				controls[3].position.top = myheight * 0.7;
				controls[3].position.width = mywidth * 0.1;
				
				controls[4].position.left = mywidth * 0.1;
				controls[4].position.top = myheight * 0.85;
				
				controls[5].position.left = mywidth * 0.35;
				controls[5].position.top = myheight * 0.75;
				controls[5].position.width = mywidth * 0.3;
				controls[5].position.height = mywidth * 0.3;

				controls[6].position.left = mywidth * 0.8;
				controls[6].position.top = myheight * 0.85;

				controls[7].position.left = mywidth * 0.85;
				controls[7].position.top = myheight * 0.5;
				controls[7].position.width = mywidth * 0.12;
				controls[7].position.height = mywidth * 0.12;

				controls[8].position.left = mywidth * 0.85;
				controls[8].position.top = myheight * 0.58;
				controls[8].position.width = mywidth * 0.12;
				controls[8].position.height = mywidth * 0.12;

				self.setData({
					controls: controls,
					mywidth: mywidth,
					myheight: myheight
				})
			}
		})

		// 4. 请求标记数组数据
		
	},

	//showtip 显示提示框
    showtip: function() {
		let controls = this.data.controls;

		// 调整显示图标的位置
		controls[0].position.left = this.data.mywidth - 208;
		controls[1].position.left = this.data.mywidth - 194;

		this.setData({
			controls: controls
		})
	},

	//hidetip 隐藏提示框
    hidetip: function() {
		let controls = this.data.controls;

		// 调整显示图标的位置
		controls[0].position.left = this.data.mywidth - 48;
		controls[1].position.left = this.data.mywidth - 34;

		this.setData({
			controls: controls
		})
	},


	// 显示控制面板
    showctrl: function() {
		let controls = this.data.controls;

		// 调整显示图标的位置
		controls[2].position.top = this.data.myheight * 0.65;
		controls[3].position.top = this.data.myheight - 0.7;
		controls[3].iconPath = "/ofo_img/hide_icon.png"

		this.setData({
			controls: controls
		})
	},

	// 显示控制面板
    hidectrl: function() {
		let controls = this.data.controls;

		// 调整显示图标的位置

		controls[2].position.top = this.data.myheight * 0.9;
		controls[3].position.top = this.data.myheight - 0.93;
		controls[3].iconPath = "/ofo_img/show_icon.png"

		this.setData({
			controls: controls
		})
	},

	tap: function(e) {
		console.log(e.controlId);
	},

	// 地图控件点击事件
    controltap: function(e) {
		// 判断点击的是哪个控件 e.controlId代表控件的id，在页面加载时的第3步设置的id
		console.log(e.controlId);

		switch(e.controlId) {
		case 1:
			// 提示建议
			// 根据状态值进行判断
			if (this.data.isShowTip) {
				this.hidetip();
				this.data.isShowTip = false;
			} else {
				this.showtip();
				this.data.isShowTip = false;
			}

			break;

			
		case 2:
			// 缴纳押金
			if (this.data.isShowTip) {
				this.hidetip();
				this.data.isShowTip = false;
			} else {
				this.showtip();
				this.data.isShowTip = false;
			}


			// wx.showModal({
			// 	title: '缴纳押金',
			// 	content: '跳转到缴纳押金页面！',
			// })
			

			break;

		case 3:
			// 白色圆盘

			break;


		case 4:
			// 隐藏转盘按钮

			// 根据状态值进行判断
			if (this.data.isShowCtrl) {
				this.hidectrl();
				this.data.isShowCtrl = false;
			} else {
				this.showctrl();
				this.data.isShowCtrl = true;
			}

			break;

		case 5:
			// 点击头像控件，跳转到个人中心
			wx.navigateTo({
				url: '../my/index'
			});
			break; 

		case 6:
			//  扫码功能
			wx.scanCode({
				success: (res) => {

					let str = "";

					str += "result:";
					str += res.result;

					
					str += ", path:";
					str += res.path;

					console.log(res)

					wx.showModal({
						title: '测试',
						content: str,
					})
				}
			})
			break; 


		case 7:
			// 礼物页面

			wx.showModal({
				title: '礼物',
				content: '一大波礼物来袭！',
			})

			break; 


		case 8:
			// 定位图标

			this.movetoPosition();

			break; 



		case 9:
			// 服务页面

			this.movetoPosition();

			break; 


		default:
			break;
			
		}
	},

	// 地图标记点击事件，连接用户位置和点击的单车位置
	bindmarkertap: function(e) {
		let _markers = this.data.markers; // 拿到标记数组

		let markerId = e.markerId; // 获取点击的标记id
		let currMaker = _markers[markerId]; // 通过id,获取当前点击的标记

		console.log(markerId);

		this.setData({
			polyline: [{
				points: [{ // 连线起点
					longitude: this.data.longitude,
					latitude: this.data.latitude
				}, { // 连线终点(当前点击的标记)
					longitude: currMaker.longitude,
					latitude: currMaker.latitude
				}],
				color:"#FF0000DD",
				width: 1,
				dottedLine: true
			}],
			scale: this.data.scale
		});
	},

	// 区域改变事件
	bindregionchange: function(e) {
		var that = this;

		console.log(e);

		if (e.type == "begin") {
			
		} else if (e.type == "end") {
			this.mapCtx.getCenterLocation({
				success: function(res) {
					console.log(res.longitude);
					console.log(res.latitude);

					that.updateMarkers(res);
				}
			});
		}
	},

	onReady: function() {
		// 页面渲染完成

		
	},

	onShow: function() {
		// 页面显示

		console.log("onShow");

		// 1.创建地图上下文，移动当前位置到地图中心
		this.mapCtx = wx.createMapContext("ofoMap"); // 地图组件的id
		this.movetoPosition();
	},

	movetoPosition: function() {
		console.log("movetoPosition");
		this.mapCtx.moveToLocation();
	},

	onHide: function() {
		// 页面隐藏
	},

	onUnload:function() {
		// 页面关闭
	}
	
})
