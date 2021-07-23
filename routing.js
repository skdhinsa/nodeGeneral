// set up routing system
const http = require('http');
const fs = require('fs');

var server = http.createServer(function (req, res) {
    console.log('request was made ' + req.url); // req.url -> where user is sending request
    // when we make a req to server, write header on respond obj
    if (req.url === '/' || req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res)
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html').pipe(res)
    }
});

server.listen(8000, () => { "Listening on port 8000" });

