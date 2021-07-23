// THE FILE SYSTEM - interact with file system - async tasks
const fs = require('fs');

// reading files - args (file path, func to invoke when complete)
// fs.readFile('./files/random.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// });

// writing files - args (path, text to write to file, callback func)
// fs.writeFile('./files/random2.txt', "Writing to file", () => {
//     console.log("C'est fini");
// })

// directories 
// sync method - blocks code
if (!fs.existsSync('./someDir')) {
    fs.mkdir('./someDir', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    })
} else {
    console.log('folder exists');
}

