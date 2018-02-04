/**
 * Created by Rain on 2016/6/2.
 */
const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('./example/zlib.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('./example/input.txt.gz'));

console.log('程序完成');
