
# �뷨 #

���� Vue ��ѭ����������item


# ���⼰���

## ��ȡҳ��Ŀ��

```
wx.getSystemInfo({
  success: function(res) {
	var w = res.windowWidth
	var h = res.windowHeight
```

## ����ϵͳ����

```
// ֱ����this������������Ժ�ֵ
this.data

// ��ȡ
this.data

```

## ������ϵͳ�е�data����

```
// ����
that.setData({
	message: '����Ϣ'
})

// ��ȡ
console.log(that.data.message)
```


## ��ʱ��״̬��ʾ

```
// current Ϊ��ǰ����ֵ
timerDraw: function (current, target) {

	// ���㵱ǰֵ��Ŀ��ֵ�еİٷֱ�ռ�����
	var deta = current / target 

	// �Ƕ�ת��
	deta *= (Math.PI * 2); 
	deta -= (Math.PI * 0.5); 
	
	// ��ʱȦ
	this.drawCircle({
		r: this.w/4,
		lineWidth: 3,
		strokeStyle: "#FFFFFF",
		endDegree: deta
	});

	// ����ԭ��ͼ������
	this.paint.draw(true)
},

drawCircle: function(obj) {
	
	// ������ɫ
	this.paint.setStrokeStyle("#6C92B8");
	if (obj.strokeStyle != undefined) {
		this.paint.setStrokeStyle(obj.strokeStyle);
	}
	
	// ���ʿ��
	if (obj.lineWidth != undefined) {
		this.paint.setLineWidth(obj.lineWidth)
	}

	// Բ����ʼ�Ƕ�
	// ��ʼ�Ƕ������Ǵ������Ŀ�ʼ�����Դ� -Math.PI/2 ��ʼ��
	var start = Math.PI * -1/2
	var end = Math.PI * 3/2
	if (obj.endDegree != undefined) {
		end = obj.endDegree
	}

	//��ʼ��Բ
	this.paint.beginPath();
	// ����һ����������Բ��  ���������뾶 �����ģ���ʼ�ĽǶ�  �����壺�����ĽǶ�  ������������˳��
	this.paint.arc(this.w/2, this.h/2.5, obj.r, start, end, false);
	// ���ùر�·������������������յ㡣
	// this.paint.closePath();

	//����ԲΪ����Բ
	this.paint.stroke();
},
```


������ʱ��
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

### ע������

�����飬ע���жϱ������� �Ƿ�Ϊundefined������ͼʡ�£�ֱ���жϱ����Ƿ���ڡ�
```
// �����ж϶��� obj.endDegree Ϊ0 ʱ������������
if (obj.endDegree) {
	// ʹ�� obj.endDegree
}
```
��ȷд���ǣ�
```
if (obj.endDegree != undefined) {
	// ʹ�� obj.endDegree
}
```



# �������� #

΢��С����ͼ���� wx-charts
http://www.51xuediannao.com/xiaochengxu/wx-charts.html


΢��С�������������
http://blog.csdn.net/u014360817/article/details/52650973


΢�ſ����ĵ�
https://mp.weixin.qq.com/debug/wxadoc/dev/api/