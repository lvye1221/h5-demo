//index.js
//获取应用实例
var app = getApp()
Page({
	data: {
	    isTime: true	
	},
	// 点击按钮
	startClock: function() {
		console.log("startClock");

		this.setData({
			isTime: true
		});

		// wx.navigateTo({
		// 	url: '/pages/clock/clock'
		// })
	}
})
