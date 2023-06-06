"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackage = void 0;
var fs = require("fs");
var process = require("process");
var path = require("path");
// 读取当前包下的配置
function getPackage() {
    var expose = {};
    fs.readFile(path.join(process.cwd(), 'package.json'), function (err, data) {
        if (err)
            throw err;
        var pkg = JSON.parse(data.toString());
        console.log("-->", pkg);
        var pkgName = pkg.name;
        var description = pkg.description;
    });
    // 读取文档
    fs.readFile(path.join(process.cwd(), 'README.md'), function (err, data) {
        if (err)
            throw err;
        var md = data.toString();
        console.log("md-->", md);
    });
}
exports.getPackage = getPackage;
// 获取包的位置
// 遍历入口
// 复制描述信息，生成组件文档
