var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var imageMin = require('gulp-imagemin');

gulp.task('css-concat', function() {
    gulp.src('stylesheets/*.css')
        .pipe(concat('b.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/'))
});

gulp.task('js-concat', function() {
    gulp.src(['bower_components/jquery/dist/jquery.min.js','bower_components/typed.js/dist/typed.min.js','javascripts/*.js'])
        .pipe(concat('b.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'))
});

gulp.task('images', function () {
    gulp.src('images/*.*')
        .pipe(imageMin({
            progressive: true
        }))
        .pipe(gulp.dest('dist/img'))
});

gulp.task('auto', function () {
    gulp.watch('stylesheets/*.css', ['css-concat']);
    gulp.watch(['bower_components/jquery/dist/jquery.min.js','bower_components/typed.js/dist/typed.min.js','javascripts/*.js'],['js-concat']);
    gulp.watch('images/*.*)', ['images'])
});

gulp.task('default', ['css-concat','js-concat','images']);