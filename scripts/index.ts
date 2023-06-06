import {getPackage} from "./gen/gen-docs";


import {Command} from 'commander';

const program = new Command();
program
    .name('scripts')
    .description(' 一些工具套件 ')
    .version('0.0.1');

program
    .command("init <name>")
    .description('init a project')
    .action((name) => {
        getPackage()
    });

program.parse();

