const express = require("express");
const app = express();


const apiRouter = express.Router();

// 定义GET请求的API路由
apiRouter.get("/get", (req, res) => {
    console.log("GET请求成功");
    const query = req.query;
    res.send({
        status: 0,// 状态码 0表示成功，1表示失败
        msg: "GET请求成功",
        data: query
    });
});

// 定义POST请求的API路由
apiRouter.post("/post", (req, res) => {
    console.log("POST请求成功");
    const body = req.body;
    console.log(body);
    res.send({
        status: 0,
        msg: "POST请求成功",
        data: body
    });
});


module.exports = apiRouter;