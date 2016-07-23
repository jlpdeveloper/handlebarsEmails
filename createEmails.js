//require file system and handlebars libraries
var fs = require('fs');
var hbs = require('handlebars');
//use the file system to read the test json file
fs.readFile('json_files/test.json', 'utf8', function (err, data) {
    if (err) throw err; // we'll not consider error handling for now
    //parse the json from the data retrieved
    var obj = JSON.parse(data);
    //read in the template handlebars file and compile with handlebars
    var template = fs.readFileSync('templates/email1.hbs', 'utf8');
    var compiledEmail = hbs.compile(template);
    //create the html by pushing the data parsed to the compiledEmail
    var html = compiledEmail(obj);
    console.log(html);
    //console.log(obj);
});