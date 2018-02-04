/**
 *
 * Created by Rain on 2016/11/24.
 */
const fs = require('fs');

var ws = fs.createWriteStream('./example/test.txt');

ws.write('beep ', 'UTF8');// 使用 utf8 编码写入数据

setTimeout(function () {
  ws.end('book \n');// 标记文件末尾
}, 1000);

// 处理流事件 --> data, end, and error
ws.on('finish', function () {
  console.log("写入完成。");
});

ws.on('error', function (err) {
  console.log(err.stack);
});
