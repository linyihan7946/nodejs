/* 说明：
1. require时会执行被加载模块的代码
*/
const custom = require("./custom-000");
// console.log(custom);

/**
 * 模块的作用域：模块内部的变量和函数在模块外部无法直接访问
 */
const custom001 = require("./custom-001");
console.log(custom001);

/**
 * 使用module.exports导出对象
 */
const custom002 = require("./custom-002");
console.log(custom002);

/**
 * js文件中的module对象
 */
console.log(module);