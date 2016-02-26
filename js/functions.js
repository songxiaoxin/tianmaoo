function getClass(classname,context){
    var obj=context||document;
    if(obj.getElementsByClassName)
    {
        return obj.getElementsByClassName(classname);
    }
    else{
        var arr=[];
        var all=obj.getElementsByTagName("*");
        for(var i=0;i<all.length;i++)
        {
            if(checkClass(classname,all[i].className))
            {
                arr.push(all[i]);
            }
        }
    }
    return arr;
}
function checkClass(className,classNames){
    var classNameArr=classNames.split("");
    for(var i=0;i<classNameArr.length;i++)
    {
        if(className==classNameArr[i])
        {
            return true;
        }
    }
    return false;
}
/*
 $() 通过css选择器获得指定元素
 selector
 [obje]	上下文范围
 */
function $(selector,obje){

    var obj=obje||document;
    if(selector=="")
    {
        return;
    }
    if(typeof selector=="string")
    {
        var selector=trim(selector);

        if(selector.charAt(0)=="#")
        {
            return obj.getElementById(selector.substr(1));
        }
        else if(selector.charAt(0)==".")
        {
            return getClass(selector.substr(1),obj);
        }
        else if(/^[a-z][a-z1-6]{0,10}$/.test(selector))
        {
            return obj.getElementsByTagName(selector);
        }
        else if(/^<[a-z][a-z1-6]{0,10}>$/.test(selector))
        {
            return document.createElement(selector.slice(1,-1));
        }
    }
    else if(typeof selector=="function")
    {
        //window.onload=function(){
        //    selector();
        //}
        addEvent(window,"load",selector);
    }
}


/*
 trim()   去掉字符串中的空白
 str    获取字符串
 [type]  b 去掉字符串两边的空白
 l 去字符串左边的空白
 r 去掉字符串右边的空白
 a 去掉字符串中的所以的空白
 */
function trim(str,type){
    var type=type||'b';
    if (type=='b') {
        return str.replace(/^\s*|\s*$/g,"");
    }
    else if(type=='l')
    {
        return str.replace(/^\s*/g,"");
    }
    else if (type=='r') {
        return str.replace(/\s*$/g,"");
    }
    else if(type=='a')
    {
        return str.replace(/\s*/g,"");
    }
}
/*
* getText() 获取文档中的纯文本
* ele       文本所在的元素
* val       替换元素中的文本内容或给元素中加文本内容
* */
function getText(ele,val){
    if(ele.innerText==undefined)
    {
        if(val==undefined)
        {
            return ele.textContent;
        }else{
             ele.textContent=val;
        }
    }
    else{
        if(val==undefined)
        {
            return ele.innerText;
        }
        else{
            ele.innerText=val;
        }
    }
}
/*
* getCss（）  获取元素的所有css样式
* obj        传人的元素
* attr      查询的样式（width\height\boder......）
* */
function getCss(obj,attr){
    if(obj.currentStyle)
    {

        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj,null)[attr];
    }

    //var obj_attr=obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,null)[attr];
    //return obj_attr;
}

/*
* animate() 封装动画
* obj   元素
* attr  属性
* end   终止值
* speed 速度
* [callback]   回掉函数*/
/*function animate(obj,attr,end,speed,callback){
    clearInterval(obj.t);
    var start=parseInt( getCss(obj,attr) );
    var init=start;
    if(init<=end){
        obj.t=setInterval(function () {
            start+=speed;
            if(start>=end)
            {
                start=end;
                clearInterval(obj.t);
                if(callback)
                {
                    callback.call(obj);
                }
            }
            else{
                obj.style[attr]=start+"px";
            }
        },50)
    }
    else if(init>=end){
        obj.t=setInterval(function(){
            start-=speed;
            if(start<=end)
            {
                start=end;
                clearInterval(obj.t);
                if(callback)
                {
                    callback.call(obj);
                }
            }
            else{
                obj.style[attr]=start+"px";
            }
        },50)
    }
}*/
/*function animate(obj,attrObj){
    clearInterval(obj.t);
    obj.t=setInterval(function () {
        for(var i in attrObj)
        {
            var start=parseInt(getCss(obj,i));
            var end=attrObj[i];
            var bili=(end-start)/8;
            if(bili>0&&bili<1){
                bili=Math.ceil(bili);
            }
            if(bili<0&&bili>-1)
            {
                bili=Math.floor(bili);
            }
            var len=start+bili;
            if(len==end)
            {
                clearInterval(obj.t);
            }
            else{
                obj.style[i]=len+"px";
            }
        }
    },50)
}*/

/*
* getChilds()    获取所有的子元素
* obj            父元素
* [type]        false   排除所有的文本节点
*               true    排除所有的空文本节点留来有内容的文本
* */
function getChilds(obj,type){
    var type=type==undefined?false:type;
    var childs=obj.childNodes;
    var arr=[];
    for(var i=0;i<childs.length;i++){
        if(type===false)
        {
            if( !(childs[i].nodeType==3||childs[i]==8) )
            {
                arr.push(childs[i]);
            }
        }
        else if(type===true)
        {
            if( !((childs[i].nodeType==3&&trim(childs[i].nodeValue)=="")||childs[i].nodeType==8) )
            {
                arr.push(childs[i]);
            }
        }
    }
    return arr;
}
/*
* getFirstChild()  获得子节点的第一个节点
* obj              父节点
* [type]           false    排除文本节点
*                  true     只排除空的文本节点
* */
function getFirstChild(obj,type){
    return getChilds(obj,type)[0];
}
/*
 * getLastChild()  获得子节点的最后一个节点
 * obj              父节点
 * [type]           false    排除文本节点
 *                  true     只排除空的文本节点
 * */
function getLastChild(obj,type) {
    var childs=getChilds(obj,type);
    return childs[childs.length-1];
}
/*
* getNumChild()   获得任意一个子节点
* obj              父节点
* n                第n个
* [type]           false    排除文本节点
*                  true     只排除空的文本节点
* */
function getNumChild(obj,n,type){
    var childs=getChilds(obj,type);
    return childs[n-1];
}
/*
* getPreviousSibling() 获得上一个兄弟节点
* obj              父节点
* [type]           false    排除文本节点
*                  true     只排除空的文本节点
* */
function getPreviousSibling(obj,type){
    var type=type==undefined?false:type;
    var pre=obj.previousSibling;
    if(pre==null){
        return false;
    }
    if(type==false){
        while(pre.nodeType==3||pre.nodeType==8)
        {
            pre=pre.previousSibling;
            if(pre==null){
                return false;
            }
        }
    }
    else if(type==true)
    {
        while( (pre.nodeType==3&&trim(pre.nodeValue)=="")||pre.nodeType==8)
        {
            pre=pre.previousSibling;
            if(pre==null){
                return false;
            }
        }
    }
    return pre;
}

/*
 * getNextSibling() 获得下一个兄弟节点
 * obj              父节点
 * [type]           false    排除文本节点
 *                  true     只排除空的文本节点
 * */
function getNextSibling(obj,type){
    var type=type==undefined?false:type;
    var next=obj.nextSibling;
    if(next==null){
        return false;
    }
    if(type==false)
    {
        while(next.nodeType==3||next.nodeType==8)
        {
            next=next.nextSibling;
            if(next==null)
            {
                return false;
            }
        }
    }
    else if(type==true)
    {
        while( (next.nodeType==3&&trim(next.nodeValue)=="")||next.nodeType==8)
        {
            next=next.nextSibling;
            if(next==null)
            {
                return false;
            }
        }
    }
    return next;
}
/*
    insertAfter()  插入到某个元素的后面
    obj            插入的元素
    objAfter       某个元素
* */
function insertAfter(obj,objAfter){
    var parent=objAfter.parentNode;
    var obj_After=getNextSibling(objAfter);
    if(obj_After==false)
    {
        parent.appendChild(obj);
    }
    else{
        parent.insertBefore(obj,obj_After);
    }
}
/*
    insertBefore()   插入到某个元素的前面
    obj              要插入的元素
    objBefore        某个元素
* */
function insertBefore(obj,objBefore){
    var parent=objBefore.parentNode;
    parent.insertBefore(obj,objBefore);
}
/*
    appendChildUp()     插入到父元素的开头
    obj                 要查入的元素
    parent              父元素
* */
function appenChilddUp(obj,parent){
    var childFirst=getFirstChild(parent);
    if(!childFirst){
        parent.appendChild(obj);
    }
    else{
        parent.insertBefore(obj,childFirst);
    }
}
/*
 appendChildUp()     插入到父元素的尾部
 obj                 要查入的元素
 parent              父元素
 * */
function appendChild(obj,parent){
    parent.appendChild(obj);
}
/*
* position:fixed  IE6兼容问题
* */
function setfixed(obj,top,left){
    clearInterval(window.t);
    if(window.ActiveXObject&&!window.XMLHttpRequest){
        obj.style.position="absolute";//判断是否在IE6中运行;
        window.t=setInterval(function () {
            var lefts=document.documentElement.scrollLeft;
            var tops=document.documentElement.scrollTop;
            obj.style.left=left+lefts+"px";
            obj.style.top=top+tops+"px";
        },50)
    }
    else{
        obj.style.position="fixed";
        obj.style.left=left+"px";
        obj.style.top=top+"px";
    }
}

/*
* 添加事件
* */
function addEvent(obj,event,callback)
{
    if(obj.addEventListener)
    {
         obj.addEventListener(event,callback,false);
    }
    else if(obj.attachEvent)
    {
         obj.attachEvent("on"+event,callback);
    }
}
/*
* 删除事件
* */
function removeEvent(obj,event,callback)
{
    if(obj.removeEventListener)
    {
         obj.removeEventListener(event,callback,false);
    }
    else if(obj.detachEvent)
    {
         obj.detachEvent("on"+event,callback);
    }
}