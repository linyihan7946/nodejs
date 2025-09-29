const express = require("express");
const app = express();

// 内置中间件
app.use(express.json());// 加入这一行，req.body就可以接收json格式的数据
app.use(express.urlencoded({ extended: false }));// 加入这一行，req.body就可以接收urlencoded格式的数据

app.post("/user", (req, res) => {
    // 在服务器，可以使用req.body获取请求体数据
    // 默认情况下，如果不配置解析表单数据的中间件，则req.body为空对象
    console.log(req.body);
    res.send("ok");
});

app.post("/book", (req, res) => {
    // 在服务器，可以使用req.body获取请求体数据
    // 默认情况下，如果不配置解析表单数据的中间件，则req.body为空对象
    console.log(req.body);
    res.send("ok");
});

app.listen(80, () => {
    console.log("server running at http://127.0.0.1");
});