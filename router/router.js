var express = require("express");

var router = express.Router();

router.get("/user/list", (req, res) => {
    res.send("user list");
});

router.get("/user/add", (req, res) => {
    res.send("user add");
});

module.exports = router;