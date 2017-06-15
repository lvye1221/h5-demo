

# 接口地址 #









# 画圆小案例 #


```
onReady: function () {
    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createCanvasContext('firstCanvas')

    context.setStrokeStyle("#00ff00")
    context.setLineWidth(5)

    context.rect(0, 0, 200, 200)
    context.stroke()

    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()
}

```

# 问题及解决 #

## 球球不显示 ##

画完之后，记得要 显示调用画这条函数

```
context.draw()

```

## 引入新创建的类 ##

```
// 新建 js 文件

// 这样暴露接口，这里不暴露是不能引用的，
module.exports.Circle = Circle; 


// ---- 这里是使用的情况 ----
// 引入写的类文件
var Circle = require("Circle.js");


// 前面的命名空间
var c = new Circle.Circle(x, y, this.context);


```

## canvas 铺满整个屏幕 ##

```
#mycanvas {
	width: 100%;
	height: 100%;

	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;

	z-index: 1;
}
```
