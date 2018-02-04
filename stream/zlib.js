/**
 * Created by Rain on 2016/6/2.
 */
const fs = require('fs');
const zlib = require('zlib');

// 压缩 zlib.txt 文件到 zlib.txt.gz中
fs.createReadStream('./example/zlib.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('./example/zlib.txt.gz'));

console.log('程序完成');
