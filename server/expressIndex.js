var express = require('express');
var app = express();

//  主页输出 "Hello World"
// Make some change
app.get('/', function (req, res) {
    console.log("主页 GET 请求");
    res.send('Hello GET');
})

//  POST 请求
app.post('/', function (req, res) {
    console.log("主页 POST 请求");
    res.send('Hello POST');
})


//  get user list 页面 GET 请求
app.get('/users', function (req, res) {
    console.log("/users GET 请求");
    res.send('获得用户列表页面');
})

//  create new user 页面 POST 请求
app.post('/users', function (req, res) {
    console.log("/user POST 请求");
    res.send('新建用户列表页面');
})

//  create new user 页面 POST 请求
app.put('/users', function (req, res) {
    console.log("/user PUT 请求");
    res.send('更新用户列表页面');
})

//  delete users 页面 DELETE 请求
app.delete('/users', function (req, res) {
    console.log("/users DELETE 请求");
    res.send('删除页面');
})


// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function (req, res) {
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
})


//  app.get('/messages', function (req, res) {
//     console.log("/return new message");
//     res.send('AJAX 不是新的编程语言，而是一种使用现有标准的新方法。');
//  })

// 设置文件目录
app.use('/', express.static('../page'));
// 提供静态html文件
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + ajaxRestfulDemo.html); //提供静态文件
})

app.use('/json', express.static('../json'));
app.get('/json/slider.json', function (req, res) {
    res.sendFile(__dirname + "/" + slider.json); //提供静态文件
})


var server = app.listen(8888, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})