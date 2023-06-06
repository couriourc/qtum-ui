import * as gulp from 'gulp';

import {createProject} from 'gulp-typescript';

// ts loader

let tsProject = createProject("tsconfig.json");

gulp.task("default", function () {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});

// scss loader


import sass from 'gulp-sass'
import * as sassLoader from 'sass'// 使用 sass 编译器
sass.compiler = sassLoader;
const {watch, series, del, dest, src} = gulp;

function scss() {
    return src(['src/scss/**/*.scss'])
        .pipe(sass())
        .pipe(dest('dist/scss'))
}

import * as Path from "path";

function watcher() {
    watch('src/scss/**/*.scss', series(scss)).on('unlink', function (path) {
        let cssName = Path.basename(path).split('.scss')[0] // 请留意一下这里的代码
        del('dist/scss/**/' + cssName + '.css')
    })
}

exports.default = series(scss, watcher)
exports.build = series(scss)




