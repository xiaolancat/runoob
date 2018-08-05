	//点击关闭图片
	var cha=document.getElementById('cha');
	cha.onclick=function(){
		var chafu=cha.parentNode;
		chafu.style.display='none';
	}
	//切换固定定位
	 var fix=document.getElementsByClassName('search-fix')[0];
	 window.onscroll=function(){
	 	var y=document.documentElement.scrollTop||window.pageYOffset;
	 	if (y>600) {
	 		fix.style.display='block';
	 	}else{
	 		fix.style.display='none';
	 	}
	 }
	//侧图移入显示
	var ct=document.getElementsByClassName('ct')[0];
	ct.onmouseover=function(){
		ct.style.width='1040px';
		ct.style.transition='all 1s ease';

	}
	ct.onmouseout=function(){
		ct.style.width='250px';
		ct.style.transition='all 1s ease';
	}
	//二级菜单
	function show(a){
		var obj=a.lastElementChild;
		obj.style.display="block";

	}
	function hide(a){
		var obj=a.lastElementChild;
		obj.style.display="none";
	}
	var gps=document.getElementById('gps');
	gps.onmouseover=function(){
		show(gps);
		gps.style.background='#fff';
	}
	gps.onmouseout=function(){
		hide(gps);
		gps.style.background='';
	}
	var jing=document.getElementById('jing');
	jing.onmouseover=function(){
		show(jing);
		jing.style.background='#fff';
	}
	jing.onmouseout=function(){
		hide(jing);
		jing.style.background='';
	}
	var ke=document.getElementById('ke');
	ke.onmouseover=function(){
		show(ke);
		ke.style.background='#fff';
	}
	ke.onmouseout=function(){
		hide(ke);
		ke.style.background='';
	}
	//菜单
	var menu=document.getElementById('menu');
	var list=menu.getElementsByTagName('li');
	menu.addEventListener('mouseover',function(e){
		var e=e||window.event;
		var eve=e.target||e.srcElement;
		while(eve!==menu){
			if(eve.nodeName=='LI'){
				show(eve);
				eve.style.background='#eee';
				break;
			}
			eve = eve.parentNode;
		}
		})

		
		menu.onmouseout=function(e){
			var e=e||window.event;
			var eve=e.target||e.srcElement;
				if(eve.nodeName=='LI'){
					hide(eve);
					eve.style.background='';
				}
			}
	
		/*for(var k=0;k<list.length;k++){
			list[k].onmouseover=function(){
				show(this);
				this.style.background='#eee';
			}
			list[k].onmouseout=function(){
				hide(this);
				this.style.background='';
			}
	
		}*/
	//地址切换
	var span=gps.getElementsByTagName('span')[0];
	var glis=gps.getElementsByTagName('li');
	for(var m=0;m<glis.length;m++){
		glis[m].index=m;
		glis[m].onclick=function(){
			for(var m=0;m<glis.length;m++){
				glis[m].style.background='#fff';
			}
			var text=this.firstChild;
			span.innerHTML=text.data;
			this.style.background='red';
		}

	}
	//搜索框内内容的更换
	var arr=['5折秒杀','跨店4免1','亿元礼券','家用电器'];
	var arr1=['智能','游戏本','优惠','电器'];
	var input1=document.getElementById('input1');
	var red=document.getElementsByClassName('red')[0];
	var aa=red.getElementsByTagName('a')[0];
		var pl=0;
		setInterval(function(){
			input1.setAttribute('placeholder',arr[pl]);
			pl++;
			if(pl==arr.length){
				pl=0;
			}

		},3000);
		setInterval(function(){
			aa.innerHTML=arr1[pl];
		},5000);

		//大轮播图
	(function(){
			var lun=document.getElementById('lun');
			var tu1=document.getElementById('tu1');
			var lis=tu1.getElementsByTagName('li');
			var num=document.getElementById('num');
			var lis2=num.getElementsByTagName('li');
			var	you=document.getElementById('you');
			var zuo=document.getElementById('zuo');
			
			var i=0;
			function a(){
				run=setInterval(function(){
					lis[i].removeAttribute('class');
					lis2[i].removeAttribute('class');
					i++;
					if(i==lis.length){
						i=0;
					}
					lis[i].setAttribute('class','act');
					lis2[i].setAttribute('class','act1');
				},2000)
			}
			a();
			for(var j=0;j<lis.length;j++){
				lis[j].onmouseover=function(){
					clearInterval(run);
					zuo.style.display='block';
					you.style.display='block';
				}
				lis[j].onmouseout=function(){
					a();
					zuo.style.display='none';
					you.style.display='none';
				}
				lis2[j].index=j;
				lis2[j].onmouseover=function(){
					clearInterval(run);
					lis[i].removeAttribute('class');
					lis2[i].removeAttribute('class');
					i=this.index;
					lis[i].setAttribute('class','act');
					lis2[i].setAttribute('class','act1');
				}
				lis2[j].onmouseout=function(){
					a();
				}
				
			}
			zuo.onmouseover=function(){
					clearInterval(run);
					zuo.style.display='block';
					you.style.display='block';
				}
			zuo.onmouseout=function(){
					a();
					zuo.style.display='none';
					you.style.display='none';
				}
			you.onmouseover=function(){
					clearInterval(run);
					zuo.style.display='block';
					you.style.display='block';
				}
			you.onmouseout=function(){
					a();
					zuo.style.display='none';
					you.style.display='none';
				}
				
				
			zuo.onclick=function(){
				lis[i].removeAttribute('class');
				lis2[i].removeAttribute('class');
				i--;
				if(i<0){
					i=5;
				}
				lis[i].setAttribute('class','act');
				lis2[i].setAttribute('class','act1');
			
			}
			
			
			you.onclick=function(){
				lis[i].removeAttribute('class');
				lis2[i].removeAttribute('class');
				i++;
				if(i==lis.length){
					i=0;
				}
				lis[i].setAttribute('class','act');
				lis2[i].setAttribute('class','act1');
			
			}
	})();
		//促销选项卡
	(function(){
		var tab=document.getElementById('tab');
		var tabli=tab.getElementsByTagName('li');
		var cont=document.getElementById('cont');
		var contdiv=cont.getElementsByTagName('div');
		for (var i = 0; i < tabli.length; i++) {
			tabli[i].index=i;
			
			tabli[i].onmouseover=function(){
				for (var i = 0; i <tabli.length; i++) {
						tabli[i].className='';
						contdiv[i].className='hide';
					}
					    tabli[this.index].className='cu1';
						contdiv[this.index].className='bx422';
				}
			}
	})();
		//倒计时
		var djs=document.getElementById('djs');
		setInterval(function(){
		var mydate=new Date();
		var h=mydate.getHours();
		var m=mydate.getMinutes();
		var s=mydate.getSeconds();
		var ds=24*60*60-h*60*60-m*60-s;
		var h1=Math.floor(ds/60/60);
		ds%=60*60;
		var m1=Math.floor(ds/60);
		ds%=60;
		var s1=ds;
		djs.innerHTML=ling(h1)+':'+ling(m1)+':'+ling(s1);
		},1000);
		function ling(num){
			if(num<10) {num = '0'+num;}
			return num;
		}
		//点击换图
		var next=document.getElementById('next');
		var prev=document.getElementById('prev');
		var wulun=document.getElementsByClassName('wulun')[0];
		function an(l){
			var newleft=parseInt(wulun.style.left)+l;
			if (newleft<-2400) {
				newleft=-800;
			}
			if (newleft>-800) {
				newleft=-2400;
			}
			wulun.style.left=newleft+'px';
			wulun.style.transition='all 1s ease';
		}
		next.onclick=function(){
			an(-800);
		}
		prev.onclick=function(){
			an(800);
		}
		var lun3=document.getElementById('lun3');
		var cirle=document.getElementById('cirle');
		var divs=cirle.getElementsByTagName('div');
		function hua(){
		var lf=lun3.offsetLeft;
		if (lf==0) {
			lf=lf-200;
			divs[0].removeAttribute('class');
			divs[1].setAttribute('class','xdian');
		}else{
			lf=lf+200;
			divs[1].removeAttribute('class');
			divs[0].setAttribute('class','xdian')
		}
		lun3.style.left=lf+'px';
		lun3.style.transition='all 1s ease';
	}
	setInterval(function(){
		hua();
	},2000);