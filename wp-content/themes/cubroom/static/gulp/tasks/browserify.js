// -------------------------------- 
// Browserify Task
// --------------------------------
// Bundle javascripty things with browserify!

// If the watch task is running, this uses watchify instead
// of browserify for faster bundling using caching.

var browserify   = require('browserify'),
    watchify     = require('watchify'),
    bundleLogger = require('../utils/bundleLogger'),
    gulp         = require('gulp'),
    handleErrors = require('../utils/handleErrors'),
    source       = require('vinyl-source-stream'),
    streamify    = require('gulp-streamify'),
    uglify       = require('gulp-uglify'),
    paths        = require('../utils/paths');

gulp.task('browserify', function() {
    var bundler = browserify({

        // Required watchify args
        cache: {}, packageCache: {}, fullPaths: true,

        // Specify the entry point of your app
        entries: [paths.script_src_watch],

        // Enable source maps!
        debug: true
    });

    var bundle = function() {

        // Log when bundling starts
        bundleLogger.start();

        return bundler
            .bundle()

            // Report compile errors
            .on('error', handleErrors)

            // Use vinyl-source-stream to make the
            // stream gulp compatible. Specifiy the
            // desired output filename here.
            .pipe(source('app.js'))

            .pipe(streamify(uglify()))

            // Specify the output destination
            .pipe(gulp.dest(paths.script_dest))

            // Log when bundling completes!
            .on('end', bundleLogger.end);
    };

    if(global.isWatching) {

        bundler = watchify(bundler);

        // Rebundle with watchify on changes.
        bundler.on('update', bundle);
    }

    return bundle();
});
