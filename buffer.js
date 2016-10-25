var buff = new Buffer(256);

len = buff.write('Simply easy learning');

console.log("Octets written :" + len);

console.log(buff.toString());

var alphabet = new Buffer(26);
for (i = 0; i < 26; i++) {
	alphabet[i] = i + 97;
}

console.log( alphabet.toString()); 
console.log( alphabet.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( alphabet.toString('ascii',0,5));   // outputs: abcde
console.log( alphabet.toString('utf8',0,5));    // outputs: abcde
console.log( alphabet.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

var json = buff.toJSON(buff);
console.log(json);

var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());

var buffer4 = new Buffer('ABCD');
var buffer5 = new Buffer('ABC');
var result = buffer4.compare(buffer5);

if(result < 0) {
   console.log(buffer4 +" comes before " + buffer5);
}else if(result == 0){
   console.log(buffer4 +" is same as " + buffer5);
}else {
   console.log(buffer4 +" comes after " + buffer5);
}

var buffer6 = new Buffer('ABC');

//copy a buffer
var buffer7 = new Buffer(2);
buffer6.copy(buffer7);
console.log("buffer7 content: " + buffer7.toString());

var buffer8 = buffer1.slice(0, 9);
console.log("buffer8 content:" + buffer8.toString());

console.log("buffer1 length " + buffer1.length);