const mysql = require('mysql');

// 连接数据库
const db = mysql.createConnection({
    host: 'localhost',
    user: 'linyihan',
    password: 'a5555550123',
    database: 'my_db_01'
});

// 查询：返回的是一个数组
db.query('SELECT * FROM users', (err, result) => {
    if (err) throw err;
    console.log(result);
});

// 插入数据：通过？进行占位符
// db.query('INSERT INTO users (username, password) VALUES (?, ?)', ["张三", "123456"], (err, result) => {
//     if (err) throw err;
//     // 检查是否插入了一行数据
//     if (result.affectedRows === 1) {
//         console.log("插入成功");
//     }
//     console.log(result);
// });

// 插入数据便捷方式：SET ?
// db.query('INSERT INTO users SET ?', { username: "李四", password: "654321" }, (err, result) => {
//     if (err) throw err;
//     // 检查是否插入了一行数据
//     if (result.affectedRows === 1) {
//         console.log("插入成功");
//     }
//     console.log(result);
// });

// 更新数据
// db.query('UPDATE users SET password = ? WHERE username = ?', ["123456", "张三"], (err, result) => {
//     if (err) throw err;
//     // 检查是否更新了一行数据
//     if (result.affectedRows === 1) {
//         console.log("更新成功");
//     }
//     console.log(result);
// });

// 更新数据的便捷方式：SET ?
// db.query('UPDATE users SET ? WHERE username = ?', [{ password: "111111" }, "李四"], (err, result) => {
//     if (err) throw err;
//     // 检查是否更新了一行数据
//     if (result.affectedRows === 1) {
//         console.log("更新成功");
//     }
//     console.log(result);
// });

// 删除数据【真正删除数据】
// db.query('DELETE FROM users WHERE username = ?', ["张三"], (err, result) => {
//     if (err) throw err;
//     // 检查是否删除了一行数据
//     if (result.affectedRows === 1) {
//         console.log("删除成功");
//     }
//     console.log(result);
// });

// 标记删除：只是打上状态
db.query('UPDATE users SET status = 1 WHERE username = ?', ["李四"], (err, result) => {
    if (err) throw err;
    // 检查是否更新了一行数据
    if (result.affectedRows === 1) {
        console.log("标记删除成功");
    }
    console.log(result);
});
