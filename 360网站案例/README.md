

360网站案例

# 特点 #

1. 分页显示
2. 动画


# 知识点 #

## 背景图片设置 ##

```

	.logo {
		width: 251px;
		height: 186px;
		background-image: url(img/logo.png);
		margin: 0 auto;
	}


	.info {
		height: 49px;
		background: url(img/info_1.png) no-repeat center center;
	}

```

## 动画实现 ##

```
    /* 默认的间距值，相当于动画的初始状态 */
	.first img {
		margin: 0 24px;
		opacity: 0;
	}

    /* 当添加上样式后，就会执行这么的动画，相当于动画后的最终状态 */
	.first.current img {
		margin: 0;
		opacity: 1;
		/*
		规定设置过渡效果的 CSS 属性的名称。
		规定完成过渡效果需要多少秒或毫秒。
		规定速度效果的速度曲线。
		定义过渡效果何时开始。
		*/
		transition: all 1s ease-out 0.3s;
	}
```

深入理解CSS过渡transition 
http://www.cnblogs.com/xiaohuochai/p/5347930.html



# 问题及解决 #

## 页面颜色一片白色 ##

检查宽高，没有发现什么问题

【答】 不小心将 .first 设成 透明色了，自然看不到啦



# 资料 #

fullPage 的使用
http://www.dowebok.com/77.html
