var fs = require("fs");
//import * as fs from 'fs/promises';
var data = '';
// Create a readable stream
var readerStream = fs.createReadStream('input.txt');
// Set the encoding to be utf8.
readerStream.setEncoding('UTF8');
// Handle stream events --> data, end, and error
readerStream.on('data', function (chunk) {
    console.log('===:New Chunk received:===')
    data += chunk;
});
readerStream.on('end', function () {
    console.log(data);
});
readerStream.on('error', function (err) {
    console.log(err.stack);
});