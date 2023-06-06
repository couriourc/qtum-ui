import {OutputOptions, rollup} from "rollup";
import type {InputOptions} from "rollup";
import * as process from "process";
import * as path from "path";

const inputOptions: InputOptions = {
    input: path.resolve(process.cwd(), 'index.js'),

}
const outputOptions: OutputOptions = {
    dir: path.resolve(process.cwd(), 'dist'),
    format: "umd"
}

export async function rollupBuild() {
    const bundle = await rollup(inputOptions);

    await bundle.write(outputOptions);
}

import {getBuildCfg} from "./build-cfg";

getBuildCfg();

