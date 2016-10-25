var fs = require('fs');
var data = 'Simply easy learning.';

// Create a writeable stream
var writerStream = fs.createWriteStream('output.txt');

// Write data to write stream with encoding
writerStream.write(data, 'utf8');

// mark the end of the file
writerStream.end();

// handle stream event => finish and error
writerStream.on('finish', function () {
	console.log('Finish writing');
});
writerStream.on('error', function (err) {
	console.log(err.stack);
})

console.log("Program ended.");