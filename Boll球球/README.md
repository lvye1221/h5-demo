

# �ӿڵ�ַ #









# ��ԲС���� #


```
onReady: function () {
    // ʹ�� wx.createContext ��ȡ��ͼ������ context
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

# ���⼰��� #

## ������ʾ ##

����֮�󣬼ǵ�Ҫ ��ʾ���û���������

```
context.draw()

```

## �����´������� ##

```
// �½� js �ļ�

// ������¶�ӿڣ����ﲻ��¶�ǲ������õģ�
module.exports.Circle = Circle; 


// ---- ������ʹ�õ���� ----
// ����д�����ļ�
var Circle = require("Circle.js");


// ǰ��������ռ�
var c = new Circle.Circle(x, y, this.context);


```

## canvas ����������Ļ ##

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
