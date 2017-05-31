// ---------------------------------
// Haml compiling Task
// ---------------------------------
var gulp  = require('gulp'),
    haml  = require('gulp-haml'),
    paths = require('../utils/paths');

gulp.task('markup', function() {
    return gulp.src(paths.haml_src)
        .pipe(haml())
        .pipe(gulp.dest(paths.haml_dist));
});

// -----------------------------------------------------
// Set the haml variable
// -----------------------------------------------------

gulp.task('useHaml', function() {
    global.useHaml = false;
});
