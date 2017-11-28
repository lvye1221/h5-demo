

https://github.com/lvye1221/h5-demo/Tac番茄闹钟

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

## 保存在系统中的data属性

```
// 设置
that.setData({
	message: '新消息'
})

// 获取
console.log(that.data.message)
```


## 计时器状态显示

```
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
```


启动定时器
```
var current = 0;
var target = this.data.mins * 60;

this.timer = setInterval(() => {
	current ++;
	if (current == target) {
		clearInterval(this.timer);
	}
	
	this.timerDraw(current, target)
}, 500);
```

### 注意事项

输入检查，注意判断变量参数 是否为undefined，不能图省事，直接判断变量是否存在。
```
// 此种判断对于 obj.endDegree 为0 时，条件不满足
if (obj.endDegree) {
	// 使用 obj.endDegree
}
```
正确写法是：
```
if (obj.endDegree != undefined) {
	// 使用 obj.endDegree
}
```



# 开发资料 #

微信小程序图表插件 wx-charts
http://www.51xuediannao.com/xiaochengxu/wx-charts.html


微信小程序的生命周期
http://blog.csdn.net/u014360817/article/details/52650973


微信开发文档
https://mp.weixin.qq.com/debug/wxadoc/dev/api/