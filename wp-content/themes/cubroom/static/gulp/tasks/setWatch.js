// -----------------------------------------------------
// Set the watch variable to use watchify or browserify
// -----------------------------------------------------

var gulp = require('gulp');

gulp.task('setWatch', function() {
    global.isWatching = true;
});
