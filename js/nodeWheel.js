/*$(function(){
    nodeWheel($(".window")[0],2);
});*/

/*
win    ��ʾ����
num    ������������
* */
function nodeWheel(win,num){
    //var window=$(".window")[0];
    var window=win;                    //��ʾ����
    var num=num||1;
    var box=$(".box",window)[0];        //����ͼƬ�Ĵ�������
    var xx=window.parentNode;
    var leftb=$(".leftB",xx)[0];   //��ť
    var rightb=$(".rightB",xx)[0]; //�Ұ�ť
    var width=parseInt(getCss(getFirstChild(box),"width"));
    box.style.width=width*getChilds(box).length+"px";
    var t;
    var flag=true;  //����
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