const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

// 必须在路由之前配置jsonp的接口，从而拦截请求
app.get("/api/jsonp", (req, res) => {
    // 获取客户端传递的回调函数名
    const funcName = req.query.callback;
    // 定义要发送到客户端的数据对象
    const data = { name: "张三", age: 18 };
    // 拼接函数调用
    const str = `${funcName}(${JSON.stringify(data)})`;
    // 把上一步拼接的字符串，响应给客户端的<script>标签进行解析
    res.send(str);
});

// 一定要在路由之前，配置cors
const cors = require("cors");
app.use(cors());

app.listen(80, () => {
    console.log("server running at http://127.0.0.1");
});