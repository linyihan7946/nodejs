const itheima = require("./index");

console.log(itheima.dateFormat(new Date()));

const str = itheima.htmlEscape("<h1>你好啊</h1>");
console.log(str);

const str2 = itheima.htmlUnescape(str);
console.log(str2);