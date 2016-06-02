/**
 * Created by Rain on 2016/6/2.
 */
var fs = require('fs');

var readStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output.txt');

readStream.pipe(writerStream);

console.log('程序执行完毕');


