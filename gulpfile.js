const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function comprimeSass () {
    return gulp.src('./src/styles/*scss')
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(gulp.dest('./dist/css'))
}

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(comprimeSass))
}

exports.default = gulp.parallel(comprimeSass);