const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

// 一定要要在路由前配置cors
const cors = require("cors");
app.use(cors());

const apiRouter = require("./apiRouter");
app.use("/api", apiRouter);

app.listen(80, () => {
    console.log("server running at http://127.0.0.1");
});