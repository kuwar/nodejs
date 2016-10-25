var fs = require('fs');

var readerStream = fs.createReadStream('input.txt');

var writerStream = fs.createWriteStream('output1.txt');

// read input.txt and write to outpt1.txt
readerStream.pipe(writerStream);

console.log("Program ended.");