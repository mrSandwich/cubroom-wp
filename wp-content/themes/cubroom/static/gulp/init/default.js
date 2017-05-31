// -------------------------------- 
// File Creator Task
// --------------------------------
// Create the path file which is then .gitignored

var fs         = require('fs'),
    gulp         = require('gulp'),
    requireDir = require('require-dir'),
    path       = './gulp/utils/paths.js',
    data       = 'module.exports = {script_dest   : "app/dist/js", sass_dest   : "app/dist/css" }';

// The default task
gulp.task('default', ['fileCreator']);


// create the local specific files
gulp.task('fileCreator', function() {

    /*
     * Check if the file exists
     * "fs.exists()" will be deprecated...see http://bit.ly/1UXR4ER
     * plan to refactor with "fs.open()"...see http://bit.ly/1acRdVh
     */
    fs.exists(path, function(exists){

        if ( exists ) {

            // Require all tasks in gulp/tasks, including subfolders
            requireDir('../tasks', { recurse: true });

            gulp.run('afterCreate');
            

        } else {

            fs.writeFile(path, data, function(){

              // Require all tasks in gulp/tasks, including sub-folders
              requireDir('../tasks', { recurse: true });

              gulp.run('afterCreate');

            });

          }


      });
    

});