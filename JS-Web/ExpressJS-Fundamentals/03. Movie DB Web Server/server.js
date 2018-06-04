const httpContext = require('http');
const url = require('url');

const attachFileReader = require('./config/fileReader');
const attachBodyParser = require('./config/bodyParser');
const handlers = require('./handlers');
const port = 9999;

function framework(req, res) {
    req.urlData = url.parse(req.url);

    attachBodyParser(req);
    attachFileReader(res);

    for (let handler of handlers) {
        if (handler(req, res) !== true) {
            break;
        }
    }
}

let server = httpContext.createServer(framework);
server.listen(port);

console.log(`Server listening on port: ${port}`);
console.log(`http://localhost:${port}`);