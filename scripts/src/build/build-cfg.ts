/* 读取配置文件 */
import * as glob from "glob";
import * as path from "path";


export function getBuildCfg() {
    const cfg = glob.globSync(path.join(process.cwd(), "qtum.config.{ts|js}"));
    console.log(`cfg-->`, cfg)
    return cfg
}

