var browserSync = require('browser-sync'),
    gulp        = require('gulp'),
    paths       = require('../utils/paths');

gulp.task('browserSync', ['build'], function() {
    browserSync({
        server: {
            baseDir: [ paths.dist_root, paths.markup_root]
        },
        files: [
        	"app/**"
        ]
    });
});
