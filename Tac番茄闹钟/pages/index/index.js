//index.js
//获取应用实例
var app = getApp()
Page({
	data: {
		showPage1: false,
		currentItem: 2
	},

	// 点击按钮
	startClock: function() {
		// console.log("startClock");
		// wx.navigateTo({
		// 	url: '/pages/clock/clock'
		// })
		
		this.setData({
			showPage1: false
		});
	},
	tapItem: function(event) {
		console.log("tap");

		this.setData({
			currentItem: event.currentTarget.dataset.id
		});

	}
})
