/**
 * fs createWriteStream 也是一个标志性的 可写流，
 * 实现stream writable stream的接口
 * 1. 继承了stream的 this 和 prototype
 * 2. 重写了stream的_write方法
 * 当年不知道这里想的什么  哈哈 添加时间 2018/08/31
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
