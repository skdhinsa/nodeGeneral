const http = require('http');
const { dirname } = require('path');

// get access to request and response objects
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>This is a HTML response</h1>')
    res.write('<p>Sending a response.</p>')
    res.end();

});

server.listen(3000, 'localhost', console.log('Listening for requests on port 3000'));
