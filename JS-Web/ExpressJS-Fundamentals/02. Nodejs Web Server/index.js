const http = require('http');
const fs = require('fs');
const port = 5000;

http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == '/index.html' || req.url == '/') {
        fs.readFile('index.html', function (err, data) {
            res.end(data);
        });
    } else if (req.url = '/about.html') {
        fs.readFile('about.html', function (err, data) {
            res.end(data);
        });
    } else {
        fs.readFile('error.html', function (err, data) {
            res.end(data);
        });
    }
}).listen(port);

console.log(`Node.js server running on port ${port}`);