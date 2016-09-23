/**
 * Created by Rain on 2016/6/2.
 */
//https://github.com/jabez128/stream-handbook#消耗一个readable流    （这个消耗流）
//https://github.com/jabez128/stream-handbook#writable流
var stream = require('stream');

//1.创建一个writable流
var ws = stream.Writable();
ws._write = function (chunk, enc, next) {    // 1.chunk代表进来的数据 ，enc 编码集
  console.log(chunk);
  next();
};

process.stdin.pipe(ws);

// 运行方法
// $ (echo beep; sleep 1; echo boop) | node write0.js
// <Buffer 62 65 65 70 0a>
// <Buffer 62 6f 6f 70 0a>


//4. 通过文件系统生成一个流
var fs = require("fs");
var data = '菜鸟教程官网地址：www.fdsafsda.com';

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('./output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data, 'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function () {
  console.log("写入完成。");
});

writerStream.on('error', function (err) {
  console.log(err.stack);
});

console.log("程序执行完毕");