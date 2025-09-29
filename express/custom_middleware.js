const express = require("express");
const app = express();
const bodyParser = require("./custom-boby-parser");

app.use(bodyParser);

app.post("/user", (req, res) => {
    res.send(req.body);
    console.log(req.body);
});

app.listen(80, () => {
    console.log("server running at http://127.0.0.1");
});
