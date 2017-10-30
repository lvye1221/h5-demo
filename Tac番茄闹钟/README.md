




# 想法 #

利用 Vue 的循环，来创建item




# 问题及解决

## 获取页面的宽高

```
wx.getSystemInfo({
  success: function(res) {
	var w = res.windowWidth
	var h = res.windowHeight
```

## 保存系统数据

```
// 直接在this对象中添加属性和值
this.data

// 获取
this.data

```

保存在系统中的data值

```

    that.setData({
      message: '新消息'
    })

      console.log(that.data.message)
```

# 开发资料 #

微信小程序图表插件 wx-charts
http://www.51xuediannao.com/xiaochengxu/wx-charts.html


微信小程序的生命周期
http://blog.csdn.net/u014360817/article/details/52650973


微信开发文档
https://mp.weixin.qq.com/debug/wxadoc/dev/api/