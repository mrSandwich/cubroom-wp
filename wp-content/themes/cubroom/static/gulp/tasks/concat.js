// --------------------------------
// Concatenation Task
// --------------------------------
// Bundle javascript libs with gulp-concat!

var bundleLogger = require('../utils/bundleLogger'),
    gulp         = require('gulp'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    paths        = require('../utils/paths');

gulp.task('concat', function() {
    return gulp.src(paths.libs)
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(paths.script_dest))
});