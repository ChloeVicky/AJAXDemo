//表單提價 
from_submit();  //为了方便管理我用函数包起来调用
//表單提價 
function from_submit() {
    var express = require('express');  //调用模板
    var app = express();  //不污染本来，用变量来表示
    var bodyParser = require('body-parser');  //调用模板
    //創建編碼解析
    var urlencodedParser = bodyParser.urlencoded({ extended: false })

    app.use(express.static('../page'));  //设置今天文件目录

    app.get('/jqueryDemo.html', function (req, res) {
        res.sendFile(__dirname + "/" + jqueryDemo.html); //提供静态文件
    })

    app.post('/process_post', urlencodedParser, function (req, res) {  //post处理方法

        // 输出 JSON 格式
        var response = {
            "names": req.body.names,   //得到页面提交的数据
            "passwords": req.body.passwords
        };
        console.log(response);
        res.send("1"); //返回的数据，这里根据情况写
        res.end();

    })

    var server = app.listen(8888, function () {  //监听
        var host = server.address().address
        var port = server.address().port
        console.log("应用实例，访问地址为 http://%s:%s", host, port)
    })

}