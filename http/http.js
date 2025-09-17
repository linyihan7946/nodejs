// 引入http请求
const http = require("http");

//创建Web服务器：createServer
const server = http.createServer();

//创建请求：server.on("request"
server.on("request", (req, res) => {
    /* req：请求对象，包含了与客户端相关的数据和属性
    req.url：客户端请求的url地址
    req.method：客户端的mothod请求类型（get、post）
    */ 
    // res：响应对象，把服务器相关的数据或属性传回客户端
    // const str1 = `Your request url is ${req.url} and request method is ${req.method}`;
    // console.log(str1);

    // // 回传到客户端
    // const str = "你好啊";
    // res.setHeader("Content-Type", "text/html; charset=utf-8");// 设置支持中文
    // res.end(str)// 会在浏览器页面上显示出来

    // http://127.0.0.1/index.html跟http://127.0.0.1/about.html
    const url = req.url;
    let content = "<h1>404 Not Found</h1>";
    if (url === "/" || url === "/index.html") {
        content = "<h1>首页</h1>";
    } else if (url === "/about.html") {
        content = "<h1>关于我们</h1>";
    } else {
        content = "<h1>404 Not Found</h1>";
    }
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(content);
})

// 启动服务：server.listen
server.listen(80, () => {
    console.log("server running at http://127.0.0.1");
})

