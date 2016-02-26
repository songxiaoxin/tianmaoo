$(function(){
    var alls=document.getElementsByTagName("*");
    for(var i=0;i<alls.length;i++)
    {
        if(alls[i].getAttribute("data-role")=="wheel")
        {
            var time=alls[i].getAttribute("wheel-time")||undefined;
            wheel(alls[i],time);
        }
    }

});
function wheel(obj,time){
    var win=obj;
    var timer=time||3000;
    //var win=$(".window",obj)[0];

    var box=$(".box",win)[0];
    var lis=$(".item",box);
    var bnts=$(".bnts",win);
    var bnt=$(".bnt",win);

    var wid=parseInt( getCss(lis[0],"width"));
    box.style.width=wid*lis.length+"px";
    var num=0;
    var t=setInterval(move,timer);
    function move() {
        num++;
        if(num==lis.length-1)
        {
            animate(box,{marginLeft:-wid*num},1000,Tween.Quad.easeOut,function(){
                box.style.marginLeft="0px";
            });
            num=0;
        }else{
            animate(box,{marginLeft:-wid*num},1000,Tween.Quad.easeOut);
        }
        
        for(var i=0;i<bnt.length;i++){
            bnt[i].style.background="none"
        }
        bnt[num].style.background="#fff";
    }
    for(var i=0;i<bnt.length;i++){
        bnt[i].index=i;
        bnt[i].onmouseover=function(){
            clearInterval(t);
            num=this.index;
            animate(box,{marginLeft:-num*wid},1000,Tween.Quad.easeOut);
            for(var i=0;i<bnt.length;i++){
                bnt[i].style.background="none"
            }
            this.style.background="#fff";
        };
        bnt[i].onmouseout=function(){
            t=setInterval(move,timer);
        };
    }

}