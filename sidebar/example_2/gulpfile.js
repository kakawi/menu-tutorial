var gulp = require('gulp');
var compass = require('gulp-for-compass');
var livereload = require('gulp-livereload');
var concatCss = require('gulp-concat-css');

var scssDir = './scss/';
var cssDir = './css/';

gulp.task('default', ['compass'], function () {
    livereload.listen();
    gulp.watch(scssDir + '*.scss', ['compass']);
});

gulp.task('compass', function () {
    return gulp.src(scssDir + './*.scss')
        .pipe(compass({
            sassDir: scssDir,
            cssDir: cssDir,
            require: ['susy'],
            force: true
        }))
        .pipe(concatCss("example_2.css"))
        .pipe(gulp.dest(cssDir))
        .pipe(livereload());
});