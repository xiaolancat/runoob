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
	var span=gps.getElementsByTagName('span')[0];
	var glis=gps.getElementsByTagName('li');
	for(var m=0;m<glis.length;m++){
		glis[m].index=m;
		glis[m].onclick=function(){
			for(var m=0;m<glis.length;m++){
				glis[m].style.background='#fff';
			}
			var text=this.firstChild;
			span.innerHTML='送货至：'+text.data;
			this.style.background='red';
		}

	}