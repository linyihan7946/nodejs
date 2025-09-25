var express = require("express");
var router = require("./router");
var app = express();

// app.use() 函数的作用：注册全局中间件
// app.use(router);

// 加前缀
app.use("/api", router);

app.listen(80, () => {
    console.log("server running at http://127.0.0.1");
});


