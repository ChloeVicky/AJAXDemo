var express = require('express');  //调用模板
var app = express();  //不污染本来，用变量来表示
var bodyParser = require('body-parser');  //调用模板

app.use(bodyParser.urlencoded({extended:true}));//用于解析表单数据 Context-Type 为application/x-www-form-urlencoded 时 返回的对象是一个键值对，当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。
app.use(bodyParser.json());//用于解析json 会自动选择最为适宜的解析方式
app.use(express.static('../page'));  //设置今天文件目录

app.get('/register.html', function (req, res) {
    res.sendFile(__dirname + "/" + register.html); //提供静态文件
})

app.post('/process_post', function (req, res) {  //post处理方法

    // 输出 JSON 格式
    var response = {
        "username": req.body.username   //得到页面提交的数据
    };

    console.log(response);
    let nameFilterResult = nameDuplicationCheck(response);
    res.send(nameFilterResult); // Send back something to let frondend know the duplication

    // res.send("1"); //返回的数据，这里根据情况写
    res.end();

})

var server = app.listen(8888, function () {  //监听
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

/**
 * Return true if there is duplication among username
 * Return false if the name is distinct
 * @param {Object} response 
 * @returns {boolean} true or false
 */
function nameDuplicationCheck(response) {
    let name = response.username;
    // let pwd = response.passwords;

    for (i = 0; i < nameRecord.length; i++) {
        // check user name
        if (nameRecord[i].username == name)
            return true;
    }

    return false;
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
