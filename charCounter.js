const http = require('http');
const fs = require('fs');

if (process.argv.length !== 3) {
    console.log('file path required');
    process.exit(1);
}

const filepath = process.argv[2];

var readStream = fs.createReadStream(filepath)

// sequentially reads through chunks as they are received.
readStream.on('data', (chunk) => {
    console.log('---- Reading chunk ----');
    console.log(` ${chunk.toString().length} chars read \n`);
});
