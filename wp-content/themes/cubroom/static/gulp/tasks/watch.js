// ---------------------------------
// Watch Task
// ---------------------------------

/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js automatically reloads any files
     that change within the directory it's serving from
*/

var gulp  = require('gulp'),
    paths = require('../utils/paths');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
    gulp.watch( 'app/src/scss/**/*.scss', ['scss'] );
    gulp.watch( paths.images_src_watch, ['images']);
});
