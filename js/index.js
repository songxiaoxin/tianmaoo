window.onload=function(){

	var mytb=document.getElementById('mytb');
	var myfavorite=document.getElementById('myfavorite');
	var myseller=document.getElementById('myseller');

	var menu_item=document.getElementsByClassName("menu-item");
	var mynav=document.getElementsByClassName("menu-bd");

	var menu_arrow=document.getElementsByClassName('menu_arrow');
	for(var i=0;i<menu_item.length;i++)
	{
		menu_item[i].index=i;
		menu_item[i].onmouseover=function(){
			mynav[this.index].style.display='block';
			this.style.background='#fff';
			this.style.borderRight='1px solid #e5e5e5';
			this.style.boderLeft='1px solid #e5e5e5';
			this.style.borderBottom='1px solid #fff';

			menu_arrow[this.index].style.borderColor='transparent transparent #bbb transparent';
			// menu_arrow[this.index].style.display='none';
			// menu_save=menu_arrow[this.index];

		}
		menu_item[i].onmouseout=function(){
			mynav[this.index].style.display='none';
					this.style.background='#f2f2f2';
					this.style.borderBottom='1px solid #e5e5e5';

					menu_arrow[this.index].style.borderColor='#bbb transparent transparent transparent';
					// menu_arrow[this.index].style.display='block';
		}
	}
	

	var myphone=document.getElementById('myphone');
	var myqrnode=document.getElementsByClassName("sn-qrnode");
	myphone.onmouseover=function(){
		myqrnode[0].style.display='block';
	}
	myphone.onmouseout=function(){
		myqrnode[0].style.display='none';
	}


	
	var headerbanner=document.getElementById("headerbanner");
	headerbanner.onmouseover=function(){
		headerbanner.style.marginRight='10px';
	}
	headerbanner.onmouseout=function(){
		headerbanner.style.marginRight='0px';
	}






	var menu_nav=$(".menu-nav");
	var banner_item=document.getElementsByClassName('banner-item');
	var list_hidden=document.getElementsByClassName('list-hidden');
	// console.log(list_item);
	var list_zhongjia=list_hidden[0];
	var move_banner=document.getElementsByClassName('move-banner');
	var banner_zhongjia=banner_item[0];
	var move_zhongjia=move_banner[0];
	var mennu_zhongjia=menu_nav[0];

	var roll_item=document.getElementsByClassName('roll-item');
	var banner_roll=document.getElementById('banner-roll');
	var banner_rolls=document.getElementsByClassName('banner-roll')[0];
	var left=-810;
	var banner_color=['#191C23','#E8E8E8','#00529F','#E8E8E8','#23F08B'];
	var control_item=document.getElementsByClassName('control-item');
	var control_save=document.getElementById('control-first');
	//var num=1;
	var num=0;
	var cur_color=0;

	//var control=function(){                            //控制器
	//	banner_roll.style.marginLeft=left+'px';
	//	left=left-810;
	//	if(left==-4050)
	//	{
	//		left=0;
	//	}
	//	category_color.style.backgroundColor=banner_color[num];
	//	cur_color=num;
	//	// if(cur_color==4){cur_color=0};
	//	control_save.style.backgroundColor='#000';
	//	control_item[num].style.backgroundColor='#c40000';
	//	control_save=control_item[num];
	//	num++;
	//	if (num==5) {num=0};
    //
	//}
	//var control= function () {
	//		num++;
	//	if(num==roll_item.length-1){
	//		animate(banner_roll,{marginLeft:left*num},1000,Tween.Quad.easeInOut,function(){
	//			banner_roll.style.marginLeft="0px";
	//		});
	//		category_color.style.backgroundColor=banner_color[num];
	//		num=0;
	//	}
	//	else{
	//		animate(banner_roll,{marginLeft:left*num},1000,Tween.Quad.easeInOut);
	//		category_color.style.backgroundColor=banner_color[num];
	//	}
	//	control_save.style.backgroundColor='#000';
	//	control_item[num].style.backgroundColor='#c40000';
	//	control_save=control_item[num];
    //
    //
    //
	//}
	animate($("img",roll_item[0])[0],{width:810},2000);

	function control(){
		num++;
		if(num==roll_item.length)
		{
			num=0;
		}
		for(var k=0;k<roll_item.length;k++){
			roll_item[k].style.opacity=0;
			roll_item[k].style.zIndex=0;
			$("img",roll_item[k])[0].style.width="830px";
			$("img",roll_item[k])[0].style.top="-10px";
			$("img",roll_item[k])[0].style.left="-10px";
		}
		animate(roll_item[num],{opacity:1},1000,function(){
			animate($("img",roll_item[num])[0],{width:810,left:0,top:0},2000);

		});

		roll_item[num].style.zIndex=1;
		category_color.style.backgroundColor=banner_color[num];
		cur_color=num;
		console.log(cur_color);
		control_save.style.backgroundColor='#000';
		control_item[num].style.backgroundColor='#c40000';
		control_save=control_item[num];

	};

	var timeId=setInterval(control, 4000);    //滚动语句

/*		//放上图片后停止运动，离开后又开始运动
		for (var i = 0; i < roll_item.length; i++) {

		roll_item[i].onmouseover=function(){
			clearInterval(timeId);
		}
		roll_item[i].onmouseout=function(){
			timeId=setInterval(control,2000);
		}
	};*/
	for (var i = 0; i < control_item.length; i++) {
		control_item[i].index=i;
		control_item[i].onmouseover=function(){
			clearInterval(timeId);
			control_save.style.backgroundColor='#000';
			this.style.backgroundColor='#c40000';
			control_save=this;
			num=this.index;
			//banner_roll.style.marginLeft=-810*this.index+'px';
			//animate(banner_roll,{marginLeft:left*num},1000,Tween.Quad.easeInOut);

			for(var k=0;k<roll_item.length;k++){
				//animate(roll_item[k],{opacity:0});
				roll_item[k].style.opacity=0;
				roll_item[k].style.zIndex=0;
				$("img",roll_item[k])[0].style.width="830px";
				$("img",roll_item[k])[0].style.top="-10px";
				$("img",roll_item[k])[0].style.left="-10px";
			}
			animate(roll_item[this.index],{opacity:1},function(){
				animate($("img",roll_item[num])[0],{width:810,left:0,top:0},2000);
			});
			roll_item[this.index].style.zIndex=1;

			category_color.style.backgroundColor=banner_color[this.index];
			cur_color=this.index;
		}
		control_item[i].onmouseout=function(){
			//num=this.index;
			//cur_color=num;
			//left=-810*this.index;
			clearInterval(timeId);
			timeId=setInterval(control,2000);

		}
	};


	var category_color=document.getElementById('category-color');
	// console.log(category_color);
	var color=['#191C23','#FCBFCD','#E1F3F4','#C95DEC','#23092E','#0D587E','#F14400','#E2D7B6','#5E4CDB','#0048BE','#F1255A','#0A134B','#DC2727','#FFE149','#FF3D54','#E96F28'];
	// console.log(color);

	//小三角
	var menu_nav_arrow=document.getElementsByClassName('menu-nav-arrow');
	var arrow_market=document.getElementById('menu-nav-arrow-market');
	var arrow_save=menu_nav_arrow[0];

	//banner图侧导航循环
	for (var i = 0; i < menu_nav.length; i++) {
		menu_nav[i].index=i;
		menu_nav[i].onmouseover=function(){

			category_color.style.backgroundColor=color[this.index];

			if(this.index==0)
			{
				category_color.style.backgroundColor=banner_color[cur_color];
				clearInterval(timeId);
				//category_color.style.backgroundColor=banner_color[cur_color];
				timeId=setInterval(control,4000);


				//arrow_market.style.display='block';
			}
			else{
				clearInterval(timeId);
			}
			//侧导航栏动态移动
			for(var j=0;j<menu_nav.length;j++){
				animate(menu_nav[j],{paddingLeft:0});
				menu_nav[j].style.background='transparent';
			}
			animate(menu_nav[this.index],{paddingLeft:8});
			menu_nav[this.index].style.background="#c40000";
			///////////////////////////////////////////////////////////////////////////////


			//list_zhongjia.style.display='none';
			list_hidden[this.index].style.display='block';
			//list_zhongjia=list_hidden[this.index];
			//放上去后变成红色
			//mennu_zhongjia.style.backgroundColor='transparent';
			//this.style.backgroundColor='#c40000';


			//////////////////////////////////////////////////////////////////////
			//banner图变化opacity
			animate(banner_zhongjia,{opacity:0},function(){
				for(var k=0;k<banner_item.length;k++)
				{
					$("img",banner_item[k])[0].style.width="850px";
					banner_item[k].style.zIndex=0;

				}
			});
			var that=this.index;
			if(this.index==0){
				for(var x=0;x<roll_item.length;x++){
					$("img",roll_item[x])[0].style.width="850px";
					roll_item[x].style.zIndex=0;
				}
				animate(banner_item[this.index], {opacity: 1}, function () {
					animate($("img", roll_item[cur_color])[0], {width: 810}, 2000);
				});
				roll_item[cur_color].style.zIndex="1";
			}
			else {
				animate(banner_item[this.index], {opacity: 1}, function () {
					animate($("img", banner_item[that])[0], {width: 810}, 2000);
					//$("img",banner_item[that])[0].style.marginLeft="30px";
					//$("img",banner_item[that])[0].style.marginTop="30px";

				});
				banner_item[this.index].style.zIndex="1";
			}
			banner_zhongjia=banner_item[this.index];
			//////////////////////////////////////////////////////////////////////
			move_zhongjia.style.display='none';
			move_banner[this.index].style.display='block';
			move_zhongjia=move_banner[this.index];
			///////////////////////////////////////////////////////////////////////
			//侧导航栏小三角变化
			arrow_save.style.display='none';
			menu_nav_arrow[this.index].style.display='block';
			if(this.index==0)
			{
				menu_nav_arrow[this.index].style.ClassName='menu-nav-arrow-market';
			}else{
			menu_nav_arrow[this.index].style.borderWidth='4px 0px 4px 4px';
			menu_nav_arrow[this.index].style.borderColor='transparent transparent transparent #fff ';
			}
			////////////////////////////////////////////////////////////////////////////
				
		};
		menu_nav[i].onmouseout=function(){

			if(this.index!=0)
			{
				clearInterval(timeId);
				arrow_market.style.display='none';

			}

			list_hidden[this.index].style.display='none';

			this.style.backgroundColor='#4a4a4a';
			//mennu_zhongjia=this;

			if(this.index==0)
			{
				menu_nav_arrow[this.index].style.display='none';
				menu_nav_arrow[this.index].style.ClassName='menu-nav-arrow';

			}
			else{
			menu_nav_arrow[this.index].style.borderWidth='4px 4px 0px';
			menu_nav_arrow[this.index].style.borderColor='#fff transparent transparent';
			arrow_save=menu_nav_arrow[this.index];
			}

		}
	};


	var brand_nav_item=document.getElementsByClassName('brand-nav-item');
	// console.log(brand_nav_item);
	var brand_rec_pannel=document.getElementsByClassName('brand-rec-pannel');
	var brand_rec_save=brand_rec_pannel[0];
	var brand_nav_save=brand_nav_item[0];
	for (var i = 0; i < brand_nav_item.length; i++) {
		brand_nav_item[i].index=i;
		brand_nav_item[i].onclick=function(){
			brand_nav_save.style.fontWeight='normal';
			brand_nav_save.style.textDecoration='none';

			this.style.fontWeight='700';
			this.style.textDecoration='underline';

			brand_rec_save.style.display='none';
			brand_rec_pannel[this.index].style.display='block';
			brand_rec_save=brand_rec_pannel[this.index];

			brand_nav_save=this;
		}
	};
	//换一批
	var brand_trigger_next=document.getElementsByClassName("brand-trigger-next");
	var brand_wall_pannel=document.getElementsByClassName('brand-wall-pannel');
	// console.log(brand_wall_pannel);
	// var save=brand_wall_pannel[0];
	var save=[brand_wall_pannel[0],brand_wall_pannel[3],brand_wall_pannel[6],brand_wall_pannel[9]];
	var brand_num=[0,0,0,0];

	for (var i = 0; i < brand_trigger_next.length; i++) {
		brand_trigger_next[i].index=i;

		brand_trigger_next[i].onclick=function(){
			save[this.index].style.display='none';
			brand_num[this.index]++;
			if(brand_num[this.index]<3)
			{
				brand_wall_pannel[3*this.index+brand_num[this.index]].style.display='block';
				save[this.index]=brand_wall_pannel[3*this.index+brand_num[this.index]];
			}
			if(brand_num[this.index]==3)
			{
				brand_num[this.index]=0;
				brand_wall_pannel[3*this.index+brand_num[this.index]].style.display='block';
				save[this.index]=brand_wall_pannel[3*this.index+brand_num[this.index]];
			}
		}
	}



	// 楼层top动作
	// var floor_move=document.getElementById('floor-move');
	/*var floor_move=document.getElementsByClassName('floor-move');
	var brand_slide=$(".brand-slide-pannel");
	var floor_move_margin=-100;
	var floor_num=0;
	var floor_num_prev=0;
	
	/!*floor_show_move=function(){
		for (var i = 0; i < floor_move.length; i++) {
			floor_move[i].style.marginLeft=floor_move_margin+'px';
		};
		// floor_move.style.marginLeft=floor_move_margin+'px';
		floor_move_margin=floor_move_margin-100;
		if(floor_move_margin==-300)
			{
				floor_move_margin=0
			};
		floor_num++;

		floor_num_prev++;

		if(floor_num==3)
		{
			floor_num=0;
		}
		if(floor_num_prev==3)
		{
			floor_num_prev=0;
		}
	}*!/
	function floor_show_move(){
		floor_num++;
		if(floor_num==4){
			animate(floor_move[0],{marginLeft:floor_move_margin*floor_num},500,Tween.Quad.easeInOut,function(){
				floor_move[0].style.marginLeft='0px';
			});
			animate(floor_move[1],{marginLeft:floor_move_margin*floor_num},500,Tween.Quad.easeInOut,function(){
				floor_move[1].style.marginLeft='0px';
			});
			floor_num=0;
		}
		else{
			animate(floor_move[0],{marginLeft:floor_move_margin*floor_num},500,Tween.Quad.easeInOut);
			animate(floor_move[1],{marginLeft:floor_move_margin*floor_num},500,Tween.Quad.easeInOut);
		}


	}
	

	var prev=document.getElementsByClassName('floor-trigger-prev');
	var next=document.getElementsByClassName('floor-trigger-next');
	var brand_slide_pannel=document.getElementsByClassName('brand-slide-pannel');

	for(var i=0;i<brand_slide_pannel.length;i++)
	{
		brand_slide_pannel[i].index=i;
	}

	// clearInterval(timeId);
	var floor_time=setInterval(floor_show_move, 4000);
	// console.log(floor_time);*/

	/*for(var i=0;i<next.length;i++)
	{
		prev[i].index=i;

		next[i].index=i;

		prev[i].onclick=function(){
			clearInterval(floor_time);
			if(floor_num_prev==0)
			{
				floor_move[this.index].style.marginLeft='-200px';
				floor_num_prev=2;
				floor_move_margin=0
			}
			else if(floor_num_prev==1)
			{
				floor_move[this.index].style.marginLeft='0px';
				floor_num_prev=0;
				floor_move_margin=-100;
			}
			else if(floor_num_prev==2)
			{
				floor_move[this.index].style.marginLeft='-100px';
				floor_num_prev=1;
				floor_move_margin=-200;
			}	
			floor_time=setInterval(floor_show_move,3000);	
		}

		next[i].onclick=function(){
			clearInterval(floor_time);
			floor_move[this.index].style.marginLeft=-100*floor_num+'px';
			floor_num++;
			if(floor_num==3)
			{
				floor_num=0;
			}
			floor_move_margin=-100*floor_num;
			floor_time=setInterval(floor_show_move,3000);	
		}
	}*/
	nodeWheel($(".window_1F")[0]);
	nodeWheel($(".window_2F")[0]);
	nodeWheel($(".window_3F")[0]);
	nodeWheel($(".window_4F")[0]);
	nodeWheel($(".window_5F")[0]);












	//////////////////////////////////////////////////////////////////////////////////////////////
	var mbar_item=document.getElementsByClassName('mbar-item');
	var item_text=document.getElementsByClassName('item_text');
	var mbar_arrow=document.getElementsByClassName('tab_arrow');
	// console.log(mbar_item);
	// console.log(item_text);
	for (var i = 0; i < mbar_item.length; i++) {
		mbar_item[i].index=i;
		mbar_item[i].onmouseover=function(){
			item_text[this.index].style.display='block';
			item_text[this.index].style.right='35px';
			mbar_arrow[this.index].style.display='block';
		}
		mbar_item[i].onmouseout=function(){
			item_text[this.index].style.display='none';
			item_text[this.index].style.right='70px';
			mbar_arrow[this.index].style.display='none';
		}
	};
	var tab_mobile=document.getElementById('tab_mobile');
	var tab_mobile_hidden=document.getElementById('tab_mobile_pic');
	tab_mobile.onmouseover=function(){
		tab_mobile_hidden.style.display='block';
	}
	tab_mobile.onmouseout=function(){
		tab_mobile_hidden.style.display='none';
	}


	item_text[item_text.length-1].onclick=function(){
		var obj=document.documentElement.scrollTop==0?document.body:document.documentElement;
		animate(obj,{scrollTop:0},1000);
	}

	var sidetab=$(".sidetab")[0];
	// var sideLeft=parseInt((document.documentElement.clientHeight-206)/2);
	// setfixed(sidetab,sideLeft,10);
	var tabs=$("li",sidetab);
	var floores=$(".floor-container");
	var floorCon=$(".floor-context")[0];
	var xx=0;


	var menu=$("#J_ASTotalContainer");
	console.log(menu);
	var menuFlag1=true;
	var menuFlag2=true;
	setfixed(menu,-50,0);


	window.onscroll=function(){
		var obj=document.documentElement.scrollTop==0?document.body:document.documentElement;
		if(obj.scrollTop>document.documentElement.clientHeight*2)
		{
			sidetab.style.display="block";
		}
		else{
			sidetab.style.display="none";
		}
		for(var i=0;i<floores.length;i++)
		{
			tabs[i].index=i;
			tabs[i].onmouseover=function(){
				var that=this;
				$("p",that)[0].style.display="none";
				$("h5",that)[0].style.display="block";
				$("h5",that)[0].style.background="#ff4100";
				$("h5",that)[0].style.color="#fff";
			}
			tabs[i].onmouseout=function(){
				var that=this;
				if(that.index!=xx)
				{
					$("p",that)[0].style.display="block";
					$("h5",that)[0].style.display="none";
					$("h5",that)[0].style.background="";
					$("h5",that)[0].style.color="#ff4100";
				}else{
					$("p",that)[0].style.display="none";
					$("h5",that)[0].style.display="block";
					$("h5",that)[0].style.background="";
					$("h5",that)[0].style.color="#ff4100";
				}

			}
			if(floores[i].offsetTop<=obj.scrollTop-floorCon.offsetTop)
			{
				for(var j=0;j<floores.length;j++)
				{
					$("p",tabs[j])[0].style.display="block";
					$("h5",tabs[j])[0].style.display="none";
				}
				xx=i;
				$("p",tabs[i])[0].style.display="none";
				$("h5",tabs[i])[0].style.display="block";
				$("h5",tabs[i])[0].style.color="#ff4100";
			}

		}


		var scrollTop=obj.scrollTop;
    	if(scrollTop>800){
    		if(menuFlag1){
    			menuFlag1=false;
    			menuFlag2=true;
    			animate(menu,{top:0});
    		}
    	}else{
    		if(menuFlag2){
                menuFlag2=false;
                menuFlag1=true;
                animate(menu,{top:-50});
            }
    	}
	}



	/*var menu=$("#J_ASTotalContainer");
	console.log(menu);
	var menuFlag1=true;
	var menuFlag2=true;
	setfixed(menu,-50,0);
	window.onscroll=function(){
		var obj=document.documentElement.scrollTop==0?document.body:document.documentElement;
    	var scrollTop=obj.scrollTop;
    	if(scrollTop>800){
    		if(menuFlag1){
    			menuFlag1=false;
    			menuFlag2=true;
    			animate(menu,{top:0});
    		}
    	}else{
    		if(menuFlag2){
                menuFlag2=false;
                menuFlag1=true;
                animate(menu,{top:-50});
            }
    	}
	}*/

	var up=$(".tab_retop")[0];
	up.onclick=function(){
        var obj = document.documentElement.scrollTop==0?document.body:document.documentElement;
        var scrollTop=obj.scrollTop;
        animate(obj,{scrollTop:0})
    }
};