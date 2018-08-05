//楼层
$(function(){
		$('.fix ul li').click(function(){
			var index=$(this).index();
			var top=$('.floor').eq(index).offset().top;
			$('body,html').animate({
				scrollTop:top
			},500);
		})
		
		var heights=[];
		
		$('.floor').each(function(){

			heights.push($(this).offset().top);
		});
		$(window).scroll(function(){
			var top=$(window).scrollTop();
			if(top>$('.floor').eq(0).offset().top){
				$('.fix').show();
			}else{
				$('.fix').hide();
			}
			var index;
			for(var i=0;i<heights.length;i++){
				if(top>=heights[i] && top<heights[i+1]){
					index=i;
					$('.fix ul li').eq(index).css('background','red').siblings().css('background','#fff');
					break;
				}else if(top>=heights[heights.length-1]){
					index=heights.length-1;
					$('.fix ul li').eq(index).css('background','red').siblings().css('background','#fff');
					break;
				}
			}
		});
		$('#top').click(function() {
			$('body,html').animate({
				scrollTop:0
			},100);
			
		})
	
	})
//顶层二级菜单
$(function(){
	$('#gps').mouseover(function(){
		$('.di1').show();
		$('.ding').css('background','#fff');
	}).mouseout(function(){
		$('.di1').hide();
		$('.ding').css('background','');
	})
})
$(function(){
	$('#jing').mouseenter(function(){
		$('.jing2').show();
		$('#jing').css('background','#fff');
	}).mouseleave(function(){
		$('.jing2').hide();
		$('#jing').css('background','');
	})
})
$(function(){
	$('#ke').mouseenter(function(){
		$('.ke2').show();
		$('#ke').css('background','#fff');
	}).mouseleave(function(){
		$('.ke2').hide();
		$('#ke').css('background','');
	})
})
//点击关闭图片
$(function(){
	$('#cha').click(function(){
	$('.dt').css('display','none');
	})
})
//轮播图
$(function(){
	var now=0;
	var len=$('.da').length;
	function run(){
		s=setInterval(function(){
			$('.da').hide();
			if(now>=len-1){
				now=0;
			}else{
				now++;
			}
			$('.da:eq('+now+')').show();
		},2000)
	}
	run();
	$('.da').mouseover(function(){
		clearInterval(s);
	}).mouseout(function(){
		run();
	})
})
$(function(){
	$('.menu1').mouseover(function(){
		$(this).css('background','#fff').addClass('submenu1');
		$(this).children('div').show();
	}).mouseout(function(){
		$(this).css('background','').removeClass('submenu1');
		$(this).children('div').hide();
	})
})
