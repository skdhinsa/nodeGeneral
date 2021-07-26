const fs = require('fs');
const http = require('http');


// get access to request and response objects
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', console.log('Listening for requests on port 3000'));
