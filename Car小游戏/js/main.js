

/*还不知道？？？*/
$(document).ready(function(){
	//track = document.getElementById("track");
	//让跑道动起来
	move();
	carmove();
	makecar();
	makecars();
})
//跑道动起来
function move(){
	$(".track").animate({"top":"-100%"},5000,"linear",function(){
		$(".track").animate({"top":"0"},0);
		move();
	})
}

var currentroad=2;

function carmove(){
	document.onkeydown=function(ev){
		var e=ev||event;
		
		var code=e.keyCode;
		if(code==37){
			console.log('向左');
			currentroad--;
			currentroad=currentroad<=0?0:currentroad;
		}
		if(code==39){
			console.log('向右');
			currentroad++;
			currentroad=currentroad>=4?4:currentroad;
		}
		$("#car").animate({"left":0.5+currentroad*20+"%"},40);
	};
}

var timer;
function makecars(){
	timer=setInterval(makecar,1000);
}

function makecar(){
	//创建一个div
	var div = document.createElement("div");
	//添加进盒子
	$("#gamebox").append(div);
	//指定 名字
	div.className="otherCar";
	var num=Math.random()*5;
	num=Math.floor(num);
	//使用JQ去改变样式
	$(div).css({"left":0.5+num*20+"%"});
	//动起来
	//出现车的速度随机
	var sudunum=Math.random()*5000;
	sudunum=Math.floor(sudunum);
	sudunum=sudunum<2000?2000:sudunum;
	
	$(div).animate({"top":"100%"},sudunum,function(){
		$(this).remove();
	})
	//碰撞检测
	crash(div);
}

function crash(div){
	var car=document.getElementById("car");

	setInterval(function(){
		var left=car.offsetLeft;
		var top=car.offsetTop;

		var height=div.offsetHeight;
		var width=div.offsetWidth;
		
		var divleft=div.offsetLeft;
		var divtop=div.offsetTop;

		// 两者之间额距离容不下一辆车的时候，就撞了
		if(Math.abs(left-divleft)<width&&Math.abs(top-divtop)<height){
			$(div).remove();
			gameover();
		}
		
	},30);
}

function gameover(){
	clearInterval(timer);
	$("#car").animate({"bottom":"-30%"},1000);
	$("#gamebox").animate({"left":"22%"},200,function(){
		$(this).animate({"left":"27%"},200,function(){
			$(this).animate({"left":"25%"},100,function(){
				$("#restart").css("display","block");
			})
		})
	})
}

function restart(){
	//窗口重新加载
	window.location.reload();
}
