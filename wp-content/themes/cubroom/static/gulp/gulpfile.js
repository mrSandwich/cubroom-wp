var gulp = require('gulp'),
	sass = require('gulp-sass'),
	cssmin = require('gulp-cssmin'),
	jshint = require('gulp-jshint'),
 	concat = require('gulp-concat');
 
gulp.task('sass', function () {
 
    gulp.src('../src/scss/**/*.scss')
 
        .pipe(sass())

        .pipe(cssmin())
 
        .pipe(gulp.dest('../dist/css'));
 
});

gulp.task('js', function () {
 
	gulp.src('../src/js/*.js')
 
		.pipe(concat('app.js'))
 
		.pipe(gulp.dest('../dist/js'));
 
});

gulp.task('watch', function() {
 
  gulp.watch('../src/scss/**/*.scss', ['sass']);
  gulp.watch('../src/js/*.js', ['js']);
 
});
 
gulp.task('default', ['sass', 'js', 'watch']);
