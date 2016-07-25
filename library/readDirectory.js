var fs = require('fs');

module.exports.readDirectory = function(path){
    fs.readdir(dirname, function(err, filenames) {
        if (err) {
        onError(err);
        return;
        }
        filenames.array.forEach(function(filename) {
            filename = path + filename;
        });
        return filenames;
     });
}