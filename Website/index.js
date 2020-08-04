var url = require('url');
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    var q = url.parse(req.url, true); 
    filename = "." + q.pathname;
    console.log(filename);
    if(filename == "./") {
        filename = "./index";
    }
    filename += ".html";
    if(filename != "./index.html" && filename != "./about.html" && filename != "./contact-me.html") {
        filename = "./404.html"
    }
    fs.readFile(filename, function(err, data) {
        if(err) {
            res.writeHead(400, {'Content-Type':'text/html'});
        }
        else
        {
        res.writeHead(200, {'Content-Type': 'text/html'});
        }
        res.write(data);
        return res.end(); 
    });
}).listen(8080);