var fs = require('fs');
var data = '';

// Create readable stream
var readerStream = fs.createReadStream('input.txt');
// set reader encoding
readerStream.setEncoding('utf8');

// handle stream events => data, end, error
readerStream.on('data', function (chunk) {
	data += chunk;
});
readerStream.on('end', function () {
	console.log(data);
});
readerStream.on('error', function (err) {
 	console.log(err.stack);
});

console.log("Program ended.");