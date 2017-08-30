//index.js
//获取应用实例
var app = getApp()
Page({
	// 点击按钮
	startClock: function() {
		console.log("startClock");
		wx.navigateTo({
			url: '/pages/clock/clock'
		})
	}
})
