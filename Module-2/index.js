var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer(function (req, res) {
    if (req.url === '/home') {
        res.write('Home page already available');
        return res.end();
    }
    else if (req.url === '/read') {
        fs.readFile('first.txt', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }
    else {
        res.write('Hello, world')
        res.end()
    }
}).listen(8080);


console.log('server listening on port 8080');	