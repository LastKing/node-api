/**
 * 创建一个readable流 的几种方式
 * https://github.com/jabez128/stream-handbook
 * Created by Rain on 2016/6/2.
 */
const stream = require('stream');

//1.创建一个 readStream 流  （长时间保持了数据存在rs中，需要大量的刷写数据保存在内存）
var rs = stream.Readable();
rs.push('r1 beep ');
rs.push('boop \n');
rs.push(null);   // 已push null 为结尾
rs.pipe(process.stdout);

//2.为了避免大量数据的缓存，通过定义 _read 实现实时按需数据推送：
var rs2 = new stream.Readable();
var c2 = 97;
rs2._read = function () {
  rs2.push(String.fromCharCode(c2++));
  if (c2 > 'z'.charCodeAt(0)) rs2.push(null);
};
rs2.pipe(process.stdout);

//3.解释上面只有 在消耗时_read才会呗调用（严重怀疑 这个例子，这个例子真的说明了么？）
var rs3 = new stream.Readable();
var c3 = 97 - 1;
rs3._read = function () {
  if (c3 >= 'z'.charCodeAt(0)) return rs3.push(null);

  setTimeout(function () {
    rs3.push(String.fromCharCode(++c3));
  }, 100);
};
rs3.pipe(process.stdout);

process.on('exit', function () {
  console.log('\n_read() called ' + (c3 - 97) + 'times');
});
process.stdout.on('error', process.exit);

//4. 这是通过读取文件 创建可取文件流
const fs = require('fs');
var rs4 = fs.createReadStream('./example/example.txt');

rs4.setEncoding('UTF8');
var data = "";

// 处理流事件 --> data, end, and error
rs4.on('data', function (chunk) {
  data += chunk;
});

rs4.on('end', function () {
  console.log("\n4. " + data);
});

rs4.on('error', function (err) {
  console.log(err.stack);
});

console.log("程序执行完毕");