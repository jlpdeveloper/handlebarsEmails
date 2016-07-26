//require file system and handlebars libraries
var fs = require('fs');

var readDir = require('./library/readDirectory.js');
var hbsFileCreator = require('./library/handlebarsCreator.js')
//make sure emails directory exists, if not make it. this is where we'll store the html
fs.exists('emails', function(dirExists){
    if(!dirExists){
        fs.mkdir('emails');
    }
});
var representativeData = {};
fs.readFile('templates/representativeInfo.json', 'utf8', function(err, repData){
    representativeData = JSON.parse(repData);
    //call library function to read all files in a directory
    readDir.readDirectory('json_files', function(files){
        //loop thru all files. Current setup is each file will be one unique object.
        //This is so code can be modular enough to be replaced with an api enpoint in 
        //future iterations
        files.forEach(function(file) {
            //read the file sent back
            fs.readFile(file, 'utf8', function(err, data){
                if(err) throw err;  // we'll not consider error handling for now
                //parse the json from the data retrieved
                var obj = JSON.parse(data);
                obj.Representative = representativeData;
            //write data to template and to emails folder with library
            hbsFileCreator.addDataToTemplate(obj, 'templates/'+ obj.Template +'.hbs',
                hbsFileCreator.writeToEmailsFolder);
            
            });
        }, this);
    });
});

