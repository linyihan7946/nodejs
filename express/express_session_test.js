const express = require('express');
const session = require('express-session');
const app = express();

// 配置session中间件
app.use(session({
    secret: 'itheima',
    resave: false,
    saveUninitialized: true,
}));

// 向session存数据
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '123456') {
        req.session.user = req.body;// 将用户信息存在session中
        req.session.isLogin = true;// 打上登录成功的标记
        res.send({status: 0, msg: '登录成功'});
    } else {
        res.send({status: 1, msg: '登录失败'});
    }
});

// 从session取数据
app.get('/api/username', (req, res) => {
    if (req.session.isLogin) {
        res.send({status: 0, msg: 'success', user: req.session.user});
    } else {
        res.send({status: 1, msg: 'fail'});
    }
});

// 情况session
app.get('/api/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) throw err;
        res.send({status: 0, msg: '退出成功'});
    });
});

app.listen(80, () => {
    console.log("server running at http://127.0.0.1");
});
