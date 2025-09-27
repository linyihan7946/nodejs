// 导入express
const express = require("express");

// 创建express实例
const app = express();

// app.get("/user", (req, res) => {
//     res.send({ name: "张三", age: 18 });
// });

// 启动服务
app.listen(80, () => {
    console.log("server running at http://127.0.0.1");
});