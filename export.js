const xlsx = require("node-xlsx");
const fs = require("fs");
const sheetData = [{ name: "国际化", data: [["中文", "英文"]] }];
let locale = JSON.parse(fs.readFileSync("react.json"));
let keys = Object.keys(locale.en);
keys.map((key) => {
    sheetData[0].data.push([locale.zh[key],locale.en[key]])
});
let buffer = xlsx.build(sheetData)
fs.writeFile('国际化.xlsx', buffer, (err, res) => console.log(res))
