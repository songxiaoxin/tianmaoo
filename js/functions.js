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
 $() ͨ��cssѡ�������ָ��Ԫ��
 selector
 [obje]	�����ķ�Χ
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
 trim()   ȥ���ַ����еĿհ�
 str    ��ȡ�ַ���
 [type]  b ȥ���ַ������ߵĿհ�
 l ȥ�ַ�����ߵĿհ�
 r ȥ���ַ����ұߵĿհ�
 a ȥ���ַ����е����ԵĿհ�
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
* getText() ��ȡ�ĵ��еĴ��ı�
* ele       �ı����ڵ�Ԫ��
* val       �滻Ԫ���е��ı����ݻ��Ԫ���м��ı�����
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
* getCss����  ��ȡԪ�ص�����css��ʽ
* obj        ���˵�Ԫ��
* attr      ��ѯ����ʽ��width\height\boder......��
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
* animate() ��װ����
* obj   Ԫ��
* attr  ����
* end   ��ֵֹ
* speed �ٶ�
* [callback]   �ص�����*/
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
* getChilds()    ��ȡ���е���Ԫ��
* obj            ��Ԫ��
* [type]        false   �ų����е��ı��ڵ�
*               true    �ų����еĿ��ı��ڵ����������ݵ��ı�
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
* getFirstChild()  ����ӽڵ�ĵ�һ���ڵ�
* obj              ���ڵ�
* [type]           false    �ų��ı��ڵ�
*                  true     ֻ�ų��յ��ı��ڵ�
* */
function getFirstChild(obj,type){
    return getChilds(obj,type)[0];
}
/*
 * getLastChild()  ����ӽڵ�����һ���ڵ�
 * obj              ���ڵ�
 * [type]           false    �ų��ı��ڵ�
 *                  true     ֻ�ų��յ��ı��ڵ�
 * */
function getLastChild(obj,type) {
    var childs=getChilds(obj,type);
    return childs[childs.length-1];
}
/*
* getNumChild()   �������һ���ӽڵ�
* obj              ���ڵ�
* n                ��n��
* [type]           false    �ų��ı��ڵ�
*                  true     ֻ�ų��յ��ı��ڵ�
* */
function getNumChild(obj,n,type){
    var childs=getChilds(obj,type);
    return childs[n-1];
}
/*
* getPreviousSibling() �����һ���ֵܽڵ�
* obj              ���ڵ�
* [type]           false    �ų��ı��ڵ�
*                  true     ֻ�ų��յ��ı��ڵ�
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
 * getNextSibling() �����һ���ֵܽڵ�
 * obj              ���ڵ�
 * [type]           false    �ų��ı��ڵ�
 *                  true     ֻ�ų��յ��ı��ڵ�
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
    insertAfter()  ���뵽ĳ��Ԫ�صĺ���
    obj            �����Ԫ��
    objAfter       ĳ��Ԫ��
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
    insertBefore()   ���뵽ĳ��Ԫ�ص�ǰ��
    obj              Ҫ�����Ԫ��
    objBefore        ĳ��Ԫ��
* */
function insertBefore(obj,objBefore){
    var parent=objBefore.parentNode;
    parent.insertBefore(obj,objBefore);
}
/*
    appendChildUp()     ���뵽��Ԫ�صĿ�ͷ
    obj                 Ҫ�����Ԫ��
    parent              ��Ԫ��
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
 appendChildUp()     ���뵽��Ԫ�ص�β��
 obj                 Ҫ�����Ԫ��
 parent              ��Ԫ��
 * */
function appendChild(obj,parent){
    parent.appendChild(obj);
}
/*
* position:fixed  IE6��������
* */
function setfixed(obj,top,left){
    clearInterval(window.t);
    if(window.ActiveXObject&&!window.XMLHttpRequest){
        obj.style.position="absolute";//�ж��Ƿ���IE6������;
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
* ����¼�
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
* ɾ���¼�
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