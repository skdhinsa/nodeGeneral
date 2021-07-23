// to output the contents of a file and denote chunk changes
// usage: [node fileReader.js <filepath>]

const http = require('http');
const fs = require('fs');

if (process.argv.length !== 3) {
    console.log('file path required');
    process.exit(1);
}

const filepath = process.argv[2];
// const filepath = './files/some.txt'
var readStream = fs.createReadStream(filepath, { encoding: 'utf8' })

// listening to data event - everytime we get a buffer of data from stream
// 2nd arg: callback func for that chunk of data
readStream.on('data', (chunk) => {
    console.log('--- NEW CHUNK---');
    console.log(chunk);
});
