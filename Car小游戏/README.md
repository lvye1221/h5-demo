

# 汽车小游戏 #


## 动画效果 ##

```
function move() {
	$(".road").animate({"top": "-100%"}, 1000, "linear", function() {
		$(".road").animate({"top": "0"}, 0);
		move();
	});
}

move();
```


# 知识点 #

## 灵活盒子模型 ##

-webkit-box 与 box 的区别

display:box;box-flex是css3新添加的盒子模型属性，它的出现可以解决我们通过N多结构、css实现的布局方式。经典的一个布局应用就是布局的垂直等高、水平均分、按比例划分。
目前box-flex属性还没有得到firefox、Opera、chrome浏览器的完全支持，但可以使用它们的私有属性定义firefox(-moz-)、opera(-o-)、chrome/safari（-webkit-)。

【chrome中要用 -webkit-box】

## box-sizing: border-box; ##

IE 对于盒模型的解释固然不符合 W3C 的规范，但是也有它的好处：无论如何改动 border 与 padding 的值，都不会导致 box 总尺寸发生变化，也就不会打乱页面整体布局。

box-sizing 属性允许您以特定的方式定义匹配某个区域的特定元素。

可通过将 box-sizing 设置为 "border-box"。这可令浏览器呈现出带有指定宽度和高度的框，并把边框和内边距放入框中。

