// 自定义的模块格式化时间
{
    const TIME = require("./dateFormat");
    const dt = new Date();
    const dtStr = TIME.dateFormat(dt);
    console.log(dtStr);
}

// 使用moment模块格式化时间
const moment = require("moment");
const dt = moment().format("YYYY-MM-DD HH:mm:ss");
console.log(dt);



