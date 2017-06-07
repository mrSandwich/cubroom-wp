var gulp = require('gulp'),
	sass = require('gulp-sass'),
	cssmin = require('gulp-cssmin'),
 	uglify = require('gulp-uglify');
 
gulp.task('sass', function () {
 
    gulp.src('../src/scss/**/*.scss')
 
        .pipe(sass())

        .pipe(cssmin())
 
        .pipe(gulp.dest('../dist/css'));
 
});

gulp.task('js', function () {

  return gulp.src('../src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('../dist/js'));
});

gulp.task('watch', function() {
 
  gulp.watch('../src/scss/**/*.scss', ['sass']);
  gulp.watch('../src/js/*.js', ['js']);
 
});
 
gulp.task('default', ['sass', 'js', 'watch']);
