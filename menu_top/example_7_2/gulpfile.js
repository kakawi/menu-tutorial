var gulp = require('gulp');
var compass = require('gulp-for-compass');
var livereload = require('gulp-livereload');

gulp.task('default', ['compass'], function () {
    livereload.listen();
    gulp.watch('./*.scss', ['compass']);
});

gulp.task('compass', function () {
    return gulp.src('./*.scss')
        .pipe(compass({
            sassDir: './',
            cssDir: './',
            require: ['susy'],
            force: true
        }))
        .pipe(gulp.dest('./'))
        .pipe(livereload());
});