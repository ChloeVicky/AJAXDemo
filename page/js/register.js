var $={
    ajax:function(options){
        var xhr=null, //XMLHttpRequest对象
            url=options.url, //url地址
            method=options.method || 'get', //传输方式，默认为get
            async=typeof(options.async)==="undefined"?true:options.async,
            data=options.data || null,
            params='',
            callback=options.success, //ajax请求成功的回调函数
            error=options.error; //执行失败后的调用的函数
        //将data的对象字面量的形式转化为字符串形式
        if(data){
            for(var i in data){
                // console.log(data[i])
                params+=i+'='+data[i]+'&';
            }
            params=params.replace(/&$/,"");
            // console.log(params)
        }
        //根据method的值改变url
        if(method=="get"){
            url+='?'+params;
        }
        console.log(url);

        if(typeof XMLHttpRequest!="undefined"){
            //如果是本地对象
            xhr= new XMLHttpRequest();
        }else if(typeof ActiveXObject!="undefined"){
            //在一些老的浏览器，不支持
            //将所有可能出现的ActiveXObject版本放在一个数组内
            var xhrArr=['Microsoft.XMLHTTP','MSXML2.XMLHTTP.6.0','MSXML2.XMLHTTP.5.0',
            'MSXML2.XMLHTTP.4.0','MSXML2.XMLHTTP.3.0','MSXML2.XMLHTTP.2.0'];
            //遍历创建XMLHttpRequest对象
            var len=xhrArr.length;
            for(var i=0;i<len;i++){
                try {
                    //创建XMLHttpRequest对象
                    xhr=new ActiveXObject[xhrArr[i]];
                    break;
                } catch (error) {
                    
                }
            }
        }else{
            throw new Error('找不到版本')
        }

        xhr.onreadystatechange=function(){
            //异步调用成功，响应内容解析完成，意味着可以在客户端调用了
            if(xhr.readyState===4){
                if((xhr.status>=200&&xhr.status<300)||(xhr.status===304)){
                    callback&&callback(JSON.parse(xhr.responseText));
                }else{
                    error&&error();
                }
            }
        }

        //创建请求
        xhr.open(method,url,async);
        // xhr.setRequestHeader("Content-type","application/x-www-form-unlencoded");
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=UTF-8");
        //发送请求
        xhr.send(params);
    }
}
// $.ajax({
//     url:"http://baidu.com",
//     method:"get",
//     async:true,
//     data:{
//         username:'12345',
//         pwd:'1234'
//     },
//     success:function(){

//     },
//     error:function(){

//     }
// })