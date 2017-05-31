// ---------------------------------
// Build Task
// ---------------------------------

var gulp = require('gulp'),
    buildTasks;

// this will remove the markup task if 
if( global.useHaml){

    buildTasks = ['browserify', 'scss', 'images', 'markup'];

} else {

    buildTasks = ['browserify', 'scss', 'images']
}

gulp.task('build', buildTasks);
