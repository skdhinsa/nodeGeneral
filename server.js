const http = require('http');

// get access to request and response objects
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello, this is the response. Success!')
    res.end();

});

server.listen(3000, 'localhost', console.log('Listening for requests on port 3000'));
