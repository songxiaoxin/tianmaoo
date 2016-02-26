/*$(function(){
    nodeWheel($(".window")[0],2);
});*/

/*
win    显示窗口
num    滚动的数量；
* */
function nodeWheel(win,num){
    //var window=$(".window")[0];
    var window=win;                    //显示窗口
    var num=num||1;
    var box=$(".box",window)[0];        //包含图片的窗口容器
    var xx=window.parentNode;
    var leftb=$(".leftB",xx)[0];   //左按钮
    var rightb=$(".rightB",xx)[0]; //右按钮
    var width=parseInt(getCss(getFirstChild(box),"width"));
    box.style.width=width*getChilds(box).length+"px";
    var t;
    var flag=true;  //开关
    function move_left(){
        animate(box,{marginLeft:-width*num},function(){
            for(var i=0;i<num;i++){
                box.appendChild(getFirstChild(box));
            }
            box.style.marginLeft=0;
            flag=true;
        })

    }
    function move_right(){
        for(var i=0;i<num;i++){
            appenChilddUp(getLastChild(box),box);
        }
        box.style.marginLeft=-width*num+"px";
        animate(box,{marginLeft:0},function(){
            flag=true;
        });
    }
    t=setInterval(move_left,2000);
    window.onmouseover= function () {
        clearInterval(t);
    };
    window.onmouseout=function(){
        t=setInterval(move_left,2000);
    };
    leftb.onmouseover= function () {
        clearInterval(t);
    };
    leftb.onmouseout=function(){
        t=setInterval(move_left,2000);
    };
    rightb.onmouseover= function () {
        clearInterval(t);
    };
    rightb.onmouseout=function(){
        t=setInterval(move_left,2000);
    };

    leftb.onclick=function(){
        if(!flag){ return;}
       flag=false;
        move_left();
    };
    rightb.onclick=function(){
        if(!flag){ return;}
        flag=false;
        move_right();
    };
}