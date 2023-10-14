const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeSass () {
    return gulp.src('./src/styles/*scss')
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(gulp.dest('./dist/css'))
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

function images() { 
    return gulp.src('./src/styles/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(comprimeSass))
}

exports.default = gulp.parallel(comprimeSass, images, scripts);