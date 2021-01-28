var express = require('express');  //调用模板
var app = express();  //不污染本来，用变量来表示
var bodyParser = require('body-parser');  //调用模板
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
    let nameFilterResult = nameFilter(response);
    // res.send(nameFilterResult); send back something to let frondend know the duplication

    res.send("1"); //返回的数据，这里根据情况写
    res.end();

})

var server = app.listen(8888, function () {  //监听
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

/**
 * return false if there is duplication among username
 * return true if the name is distinct
 * @param {Object} response 
 */
function nameFilter(response) {
    let name = response.names;
    let pwd = response.passwords;

    for (i = 0; i < nameRecord.length; i++) {
        // check user name
        if (nameRecord[i].username == name) 
            return false;
    }
    return true;
}

var nameRecord = [
    {
        "username": "zhangsan",
        "userpwd": "zhangsan"
    },
    {
        "username": "lisi",
        "userpwd": "lisi"
    },
    {
        "username": "134",
        "userpwd": "sdfsdf"
    },
    {
        "username": "135",
        "userpwd": "dsff"
    },
    {
        "username": "136",
        "userpwd": "dsff"
    },
    {
        "username": "13521554677",
        "userpwd": "sdfsdf"
    },
    {
        "username": "13521557890",
        "userpwd": "sdfsdf"
    },
    {
        "username": "13521557891",
        "userpwd": "sdfsdf"
    },
    {
        "username": "13810701234",
        "userpwd": "sdfsdf"
    },
    {
        "username": "13810709999",
        "userpwd": "shitou051031"
    },
    {
        "username": "13810709998",
        "userpwd": "sdfsdfdsf"
    },
    {
        "username": "13412345678",
        "userpwd": "shitou"
    }
]
