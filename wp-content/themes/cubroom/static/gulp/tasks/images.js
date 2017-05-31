// ---------------------------------
// Imagemin Task
// ---------------------------------

var changed    = require('gulp-changed'),
    gulp       = require('gulp'),
    imagemin   = require('gulp-imagemin'),
    paths      = require('../utils/paths');

gulp.task('images', function() {
    return gulp.src(paths.image_src_watch)
        .pipe(changed(paths.image_dest)) // Ignore unchanged files
        .pipe(imagemin()) // Optimize
        .pipe(gulp.dest(paths.image_dest));
});
