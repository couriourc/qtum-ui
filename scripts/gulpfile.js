"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulp = require("gulp");
var gulp_typescript_1 = require("gulp-typescript");
// ts loader
var tsProject = (0, gulp_typescript_1.createProject)("tsconfig.json");
gulp.task("default", function () {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});
// scss loader
var gulp_sass_1 = require("gulp-sass");
var sassLoader = require("sass"); // 使用 sass 编译器
gulp_sass_1.default.compiler = sassLoader;
var watch = gulp.watch, series = gulp.series, del = gulp.del, dest = gulp.dest, src = gulp.src;
function scss() {
    return src(['src/scss/**/*.scss'])
        .pipe((0, gulp_sass_1.default)())
        .pipe(dest('dist/scss'));
}
var Path = require("path");
function watcher() {
    watch('src/scss/**/*.scss', series(scss)).on('unlink', function (path) {
        var cssName = Path.basename(path).split('.scss')[0]; // 请留意一下这里的代码
        del('dist/scss/**/' + cssName + '.css');
    });
}
exports.default = series(scss, watcher);
exports.build = series(scss);
