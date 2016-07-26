//require filesystem library
var fs = require('fs');
var hbs = require('handlebars');
/**
 * function to gather info from template, then return html content to onfinish function
 */
module.exports.addDataToTemplate = function(data, templatePath, onFinish){

    //read in the template handlebars file and compile with handlebars
    var template = fs.readFileSync(templatePath, 'utf8');
    var compiledEmail = hbs.compile(template);
    //create the html by pushing the data parsed to the compiledEmail
    var html = compiledEmail(data);
    //once parsed, call onFInish function
    onFinish(html, data);

     
};
/**
 * function to write the content passed in to an html in the emails folder
 */
module.exports.writeToEmailsFolder = function(htmlContent, data){
      fs.writeFile('emails/' + data.Name.Last + '-email-'+ data.Template + '.html', htmlContent, 'utf8');
    
};