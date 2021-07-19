// to output the contents of a file and denote chunk changes
// usage: [node fileReader.js <filepath>]

const http = require('http');
const fs = require('fs');

// https://stackoverflow.com/questions/22213980/could-someone-explain-what-process-argv-means-in-node-js-please
// ^ to understand process.argv (basically reads command in terminal, takes it as array)
if (process.argv.length !== 3) {
    console.log('file path required');
    process.exit(1);
}

const filepath = process.argv[2];

var readStream = fs.createReadStream(filepath)

readStream.on('data', (chunk) => {
    console.log('------');
    console.log(chunk.toString());
});
