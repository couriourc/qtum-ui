/** @file 生成 docs  */
import * as fs from "fs";
import * as process from "process";
import * as path from "path";

// 读取当前包下的配置
const promisify = (hanlder: (...args: any[]) => any) => {
    return new Promise(hanlder)
}

export function getPackage() {

    return Promise.all([
        promisify(
            (resolve) => {
                fs.readFile(path.join(process.cwd(), 'package.json'), (err, data) => {
                    if (err) throw  err
                    const pkg = JSON.parse(data.toString());
                    console.log(`-->`, pkg)

                    resolve(pkg);
                });
            }
        ),
        promisify(
            (resolve) => {
                fs.readFile(path.join(process.cwd(), 'README.md'), (err, data) => {
                    if (err) throw err;
                    const md = data.toString();
                    console.log(`md-->`, md);
                    resolve(md);
                });
            })
    ]).then((res) => {
        console.log(`res-->`, res)
    })
    // 读取文档
}

// 获取包的位置

// 遍历入口

// 复制描述信息，生成组件文档


