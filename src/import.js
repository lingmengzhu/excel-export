const xlsx = require("node-xlsx");
const path = require("path");
let list = xlsx.parse(path.join(__dirname, 'input.xlsx'))
console.log(list) // 此时咱们先看一下 list 的值是什么
console.log(list[0].data)
