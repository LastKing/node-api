/**
 * Created by Rain on 2016/6/2.
 */
const fs = require("fs");
const zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('./example/zlib.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('./example/input.txt'));

console.log("文件解压完成。");