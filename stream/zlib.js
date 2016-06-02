/**
 * Created by Rain on 2016/6/2.
 */
var fs = require('fs');
var zlib = require('zlib');


fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log('程序完成');
