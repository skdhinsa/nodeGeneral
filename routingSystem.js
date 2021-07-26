// setting up a simple routing system

const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
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
