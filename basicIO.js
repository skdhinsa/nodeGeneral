var Stream = require('stream');

// readable process is directly echoed back to process.stdout
process.stdin.pipe(process.stdout);
