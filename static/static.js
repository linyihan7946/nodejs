const express = require("express");

const app = express();

// 静态资源
app.use(express.static("public"));

app.listen(80, () => {
    console.log("server running at http://127.0.0.1");
})

console.log("sdsdfsdf")