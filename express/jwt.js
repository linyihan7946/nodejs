const express = require('express');
const app = express();

// 1、导入jwt
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// 2、定义secret秘钥
const secret = 'linyihan';

// 3、使用express-jwt中间件，验证token。指定api接口不需要权限
// 配置成功后，就可以把解析的用户信息挂在到req.user中
app.use(expressJWT({secret}).unless({path: [/^\/api\//]}));

// 登陆成功后，返回token
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'linyihan' && password === '123456') {
        // 生成token
        // 一定不要把密码加密到token字符串中
        const token = jwt.sign({ username}, secret,{ expiresIn: '1h'});
        res.send({ 
            status: 200,
            message: '登录成功',
            token: token 
        });
    } else {
        return res.send({ 
            status: 400,
            message: '登录失败' 
        });
    }
});

app.get('/admin/getinfo', (req, res) => {
    // 从req.user中获取用户信息
    const { username } = req.user;
    res.send({
        status: 200,
        message: '获取用户信息成功',
        data: req.user
    });
});



