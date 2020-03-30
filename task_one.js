const http = require('http');
const { parse } = require('querystring');

const server = http.createServer((req, res) => {
if (req.method == 'POST' && req.url=='/message') {
    var form = '';
//Convert data to string
    req.on('data', function (chunk) {
        form += chunk.toString();

//Write contents to file 
var fs = require('fs');
var data = require.url
fs.appendFile('message.txt', form, function(err){
   if(err){throw err;}
else{console.log('saved!');};}
);
                                    });
return;
                                                  }                                               

// show a the submit form on local host
res.writeHead(200, {'content-type': 'text/html'});
res.end(
       '<body>'+
       '<form action="/message" method="POST">'+
       '<label for="email">Please type your message</label><br />'+
       '<textarea name="message"></textarea>'+
       '<input type="submit" value="Submit">'+
       '</form>'+
       '</body>'
        );
}).listen(8080);