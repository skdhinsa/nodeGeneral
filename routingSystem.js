// setting up a simple routing system

const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    res.setHeader('Content-Type', 'text/html');
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/ABOUT':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        case '/contact':
            path += 'contact.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    })

});


server.listen(3000);
console.log("Listening on port 3000");
