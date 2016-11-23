/**
 * Created by Rain on 2016/11/23.
 */
const stream = require('stream');

var Readable = stream.Readable;

//1.创建 一个 可读流， 用push 写入数据， 在流未被使用之前就已经写入了  内存
var rs1 = new Readable;

rs1.push('beep ');
rs1.push('boop\n');
rs1.push(null);
rs1.pipe(process.stdout);

//2. 使用 __read  函数只有 被调用时，才会被调用
var rs2 = new Readable;

var c2 = 97;
rs2._read = function () {
  rs2.push(String.fromCharCode(c2++));
  if (c2 > 'z'.charCodeAt(0)) rs2.push(null);
};

rs2.pipe(process.stdout);

//3. 验证
var rs3 = Readable();

var c3 = 97 - 1;

rs3._read = function () {
  if (c3 >= 'z'.charCodeAt(0))return rs3.push(null);

  setTimeout(function () {
    rs3.push(String.fromCharCode(++c3));
  }, 100);
};
rs3.pipe(process.stdout);

process.on('exit', function () {
  console.error('\n_read() called ' + (c3 - 97) + ' times');
});
process.stdout.on('error', process.exit);








