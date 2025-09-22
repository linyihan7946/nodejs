## 安装
```
npm install itheima-tools
```

## 导入
```js
const itheima = require("itheima-tools")
```

## 格式化时间
```js
console.log(itheima.dateFormat(new Date()));
```

## 转义html中的特殊字符
```js
const str = itheima.htmlEscape("<h1>你好啊</h1>");
```

## 还原html中的特殊字符
```js
const str = itheima.htmlEscape("<h1>你好啊</h1>");
const str2 = itheima.htmlUnescape(str);
```

## 开源协议
ISC
