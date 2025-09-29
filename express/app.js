const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

const apiRouter = require("./apiRouter");
app.use("/api", apiRouter);

app.listen(80, () => {
    console.log("server running at http://127.0.0.1");
});