const express = require("express");

const app = express();

// 中间件
// const mw = function (req, res, next) {
//     console.log("这是中间件函数");
//     next();
// }
// 全局生效的中间件
// app.use(mw);

/*
// 中间件的执行顺序：从上到下
*/
// app.use((req, res, next) => {
//     // console.log("这是中间件函数");
//     const time = Date.now();
//     // 把时间挂载到req对象上，方便后面使用
//     req.startTime = time;
//     console.log("第一个中间件执行了")
//     next();
// });
// app.use((req, res, next) => {
//     console.log("第二个中间件执行了")
//     next();
// });

// 局部生效的中间件
const mw = function (req, res, next) {
    console.log("这是局部中间件函数");
    next();
}
app.get("/", mw, (req, res) => {
    console.log("Home page");
    res.send("Home page");
});

// app.get("/", (req, res) => {
//     console.log("Home page");
//     console.log(req.startTime);
//     res.send("Home page");
// });

// app.get("/user", (req, res) => {
//     console.log("User page");
//     console.log(req.startTime);
//     res.send("User page");
// });

app.listen(80, () => {
    console.log("server running at http://127.0.0.1");
})