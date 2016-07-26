//require file system
var fs = require('fs');
/**
 * create readDirectory function to be called later
 */
module.exports.readDirectory = function(path, callback, onError){
    //try to read directory sent in
    fs.readdir(path, function(err, filenames) {
        //if there was error, throw
        if (err) {
        onError(err);
        return;
        }
        //create temp array for file names to be concatenated with path
        var newFileNames = [];
        //make sure to add trailing slash to path
         if(!path.endsWith('/')){
            path = path + '/';
         }
         //go thru all objects and add to the newFileNames array with the path
        filenames.forEach(function(filename) {
            newFileNames.push( path + filename);
        });
        //run the callback function with the new filenames
        callback(newFileNames);
     });
}