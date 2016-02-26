$(function(){
    //====顶部下拉=========
    $('.menu-item').hover(function(){
        $(this).find('.menu-bd').show();
    },function(){
        $(this).find('.menu-bd').hide();
    });

//=============中部一一对应==================
    var color=['#191C23','#FCBFCD','#E1F3F4','#C95DEC','#23092E','#0D587E','#F14400','#E2D7B6','#5E4CDB','#0048BE','#F1255A','#0A134B','#DC2727','#FFE149','#FF3D54','#E96F28'];
    //category-color
    $('.menu-nav').each(function(i){
        $(this).data('index',i);
    });
    $('.menu-nav').hover(function(){
            clearInterval(timeId);
       $('.hide').stop();
       $(this).find('.list-hidden').show(0,function(){
           $(this).animate({left:190},200);
       });
       $(this).css('background','#c40000');
       $(this).animate({paddingLeft:8},'200');
       $('.banner-item  img').animate({width:810},2000);
       var i=$(this).data('index');
       $('.category-color').css('backgroundColor',color[i]);
       $('.banner-item').hide();
       $($('.banner-item')[i]).show();
       $('.move-banner').hide();
       $($('.move-banner')[i]).show();
    },function(){
        $('.hide').stop();
       $(this).find('.list-hidden').hide();
       $(this).css('background','');
       $(this).animate({paddingLeft:-8},'50');
        $('.banner-item  img').animate({width:850},2000);
        //var i=$(this).data('index');
        //$($('.banner-item')[i]).hide()

    })

    //=================微微左移动效果============================
    $('.move-con').hover(function(){
        $(this).css({position:'relative'});
        $(this).stop();
        $(this).animate({left:-10},200);
    },function(){
        $(this).stop();
        $(this).animate({left:0},200);
    });

    //===========楼层动画====================


    //滚动 小图标对应

    var arr=[];
    $('.sidetab li').each(function(i){
        arr.push($($('.floor-container')[i]).offset().top-50)
    });
    var fix=$('.sidetab li');
    $(window).mouseover(function(){
        var zhi=$(window).scrollTop();
        fix.each(function(i){
            if(zhi>=(arr[i]-100)&&zhi<(arr[i+1]-100)){
                //$($('.sidetab li p')[i]).hide();
                //$($('.sidetab li h5')[i]).show();
                $(fix[i]).css({color:'rgb(255, 65, 0)'});
            }else{
                //$($('.sidetab li p')[i]).show();
                //$($('.sidetab li h5')[i]).hide();
                $(fix[i]).css({color:''});
            }
        })
    });

    $('.sidetab li').each(function(i){
        $(this).data('index',i);
    });
    $('.sidetab li').click(function(){
        //$('.sidetab li p').hide();
        //$('.sidetab li h5').show();
        var i=$(this).data('index');
        var newtop=$($('.fp-floor')[i]).offset().top-50;
        $({top:$(window).scrollTop()}).animate(
            {top:newtop},
            {duration:700,step:function(){$(window).scrollTop(this.top);}}
        )
    });

    $('.sidetab li').hover(function(){
        var i=$(this).data('index');
        $(this).stop();
        $($('.sidetab li p')[i]).hide();
        $($('.sidetab li h5')[i]).show();
        $($('.sidetab li h5')[i]).css({color:'white'});
    },function(){
        var i=$(this).data('index');
        $($('.sidetab li p')[i]).show();
        $($('.sidetab li h5')[i]).hide();
        $($('.sidetab li h5')[i]).css({color:''});
    });

    //============头部导航条==========================
    //var ti;
    //$(window).scroll(function(){
    //    if($(window).scrollTop() > 300){
    //        clearTimeout(ti);
    //        ti = setTimeout(function(){
    //            $('#J_ASTotalContainer').show();
    //        },500);
    //    }else{
    //        clearTimeout(ti);
    //        $('#J_ASTotalContainer').hide();
    //    };
    //});
    $({aaa:-50}).animate({aaa:0},{
        duration:8000,
        step:function(){
            var that=this;
            $(window).scroll(function(){
                if($(window).scrollTop()>800){
                    $('.as-total-container').css({top:that.aaa});
                    $('.sidetab').show()
                }
                else{
                    $('#J_ASTotalContainer').css({top:-50});
                    $('.sidetab').hide()
                }
            })
        }
    });
    //===============侧边栏效果==========================
    $('.mbar-item').each(function(i){
        $(this).data('index',i)
    });
    $('.mbar-item').hover(function(){
        var i=  $(this).data('index');
        $('.mbar-item').stop();
        $($('.tab_arrow')[i]).show();
        $($('.item_text')[i]).show();
    },function(){
        var i=  $(this).data('index');
        $($('.tab_arrow')[i]).hide();
        $($('.item_text')[i]).hide();
    });




    //====================轮播============================
    var color1=['#191C23','#E8E8E8','#00529F','#E8E8E8','#23F08B'];
    var index=0;
    var lunbo=function(){
        $('.roll-item').hide();
        var el= $('.roll-item')[index];
        $(el).show();
        $('#category-color').css('background',color1[index]);
        $('.control-item').removeClass('control-first');
        $($('.control-item')[index]).addClass('control-first');
        index+=1;
        if(index==$('.roll-item').length){
            index=0;
        }
    }
    $('.control-item').each(function(i){
        $(this).data('index',i)
    })
    $('.control-item').hover(function(){
        clearInterval(timeId);
        $('.control-item').removeClass('control-first');

        $(this).addClass('control-first');
        var i = $(this).data('index');
        $('#category-color').css('background',color1[i]);
        $('.roll-item').hide();
        $( $('.roll-item')[i] ).show();
        index=i;
    },function(){
        //clearInterval(timeId);
        timeId=setInterval(lunbo,2000);
        //$('#category-color').css('background','');
    })
    var timeId=setInterval(lunbo,2000);

    $($('.menu-nav')[0]).hover(function(){
        clearInterval(timeId);
       timeId=setInterval(lunbo,2000)
    });

    //===============回到顶部===========================
    $(".tab_retop").click(function(){
        $({top: $(window).scrollTop()}).animate(
            {top: 0},
            {
                duration: 700,
                step: function() {
                    $(window).scrollTop(this.top);
                }
            }
        );
    });

//===========热门品牌效果=======================
    $('.brand-nav-item').each(function(i){
        $(this).data('index',i);
    });
    $('.brand-nav-item').click(function(){
        var i= $(this).data('index');
        $('.brand-rec-pannel').hide();
        $($('.brand-rec-pannel')[i]).show();
        $($('.brand-nav-item')[i]).css({fontWeight:'800'},{borderBottom:'red'});
    });
    //,{color:'red'},{    textDecoration:'underline'}
    var i=0;
    $($('.brand-trigger-next')[i]).click(function(){
        i++;
        $($('.brand-wall-pannel')[i]).show();
        //if(i>3){
        //    i=0;
        //}

    });







    //==============楼层轮播============
       //var fma=$('.floor-show-middle');
       //var fmb=$('.floor-show-middle .floor-move');
       //var lbtns=$('.leftB');
       //var rbtns=$('.rightB');

    var lunbo1=function(a,b,c){
        var slides=$(a);
        var index=0,next=0;
        $(slides[index]).attr('style',function(){return 'left:0'});
        var move=function(){
            index+=1;
            if(index==slides.length){
                index=0;
            }
            $(slides[index]).animate({left:0},700);
            $(slides[next]).animate({left:-100},700);
            $(slides[next]).animate({left:100},1);
            next=index;
        };
        $(b).click(function(){
            index+=1;
            if(index==slides.length){
                index=0;
            }

            $(slides[index]).animate({left:0},700);
            $(slides[next]).animate({left:-100},700);
            $(slides[next]).animate({left:100},1);
            next=index;
        });

        $(c).click(function(){
            index-=1;
            if(index<0){
                index=slides.length-1;
            }
            $(slides[index]).animate({left:-100},1);
            $(slides[next]).animate({left:100},700);
            $(slides[index]).animate({left:0},700);
            next=index;
        });

        var time11=setInterval(move,2000);

        $(b).hover(function(){
            clearInterval(time11);
        },function(){
            time11=setInterval(move,2000);
        })
        $(c).hover(function(){
            clearInterval(time11);
        },function(){
            time11=setInterval(move,2000);
        })

    };
    lunbo1('.floor1 .brand-slide-pannel','.floor1 .rightB','.floor1  .leftB');
    lunbo1('.floor2 .brand-slide-pannel','.floor2 .rightB','.floor2 .leftB ');
    lunbo1('.floor3 .brand-slide-pannel','.floor3 .rightB','.floor3 .leftB ');
    lunbo1('.floor4 .brand-slide-pannel','.floor4  .rightB','.floor4 .leftB');
    lunbo1('.floor5 .brand-slide-pannel','.floor5  .rightB','.floor5 .leftB');




    //setInterval(function(){
    //    var index=1;
    //    $({bbb:0}).animate({bbb:-200*index},{
    //        duration:2000,
    //        step:function(){
    //            $('.floor-move').css({marginLeft:this.bbb});
    //        }
    //    })
    //
    //},2000)
/*
    var o={
        d:7,
        fn:function(){
            var fn=function(){
                console.log(this.d,arguments);
            }
            fn.apply(this,[this]);
        }
    }
    o.fn.apply({a:1,b:2,d:3})  //
   // apply() 方法有两个参数，用作 this 的对象和要传递给函数的参数的数组。


var fn=(function(){
    var limit=0;
    return function(){
        limit+=1;
        if(limit>3)return false;
        return '-'
    }
})();
    for(var i=0;i<10;i++){
        console.log(fn())
    }


    Object.prototype.create=function(o){
        var f=function(){};
        f.prototype=o;
        return new f();
    };
    var a={
        b:1,
        c:function(){}
    };
    var no=Object.create(a);
    no.c=3;
    no.e=function(){};

    Array.prototype.f=function(f,value){
        var i;
        for(i=0;i<this.length;i++){
            value=f(this[i],value)
        }
        return value;
    };
    //var a=function


*/


});