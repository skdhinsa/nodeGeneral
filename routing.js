// set up routing system
const http = require('http');
const fs = require('fs');

var server = http.createServer(function (req, res) {
    console.log('request was made ' + req.url); // req.url -> where user is sending request
    // when we make a req to server, write header on response obj
    if (req.url === '/' || req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if (req.url === '/api/books') {
        // send this object as json - JSON.stringify()
        var books = [
            { title: "Kafka on the Shore", author: 'Haruki Murakami' },
            { title: "Sapiens", author: 'Yuval Noah Harari' },
            { title: "Born a Crime", author: "Trevor Noah" }
        ]
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(books)) // .end expects buffer or string
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(8000);
console.log("Listening on port 8000");

