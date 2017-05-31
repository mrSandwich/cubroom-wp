// ---------------------------------
// Scss Task
// ---------------------------------

var gulp         = require('gulp'),
	sass         = require('gulp-ruby-sass'),
	handleErrors = require('../utils/handleErrors')
	browserSync  = require('browser-sync'),
    paths        = require('../utils/paths');

gulp.task('scss', function() {
    return sass(paths.sass_src_watch, { compass: true } )
        .on('error', handleErrors)
        .pipe(gulp.dest(paths.sass_dest));
});
