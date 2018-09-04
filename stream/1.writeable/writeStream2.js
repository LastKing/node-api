/**
 * 标准的 es5 流程下的实现一个自己的流
 * create by toonew on 2018/8/31
 */
const util = require('util');
const stream = require('stream');
const Writable = stream.Writable;

function MyWs(options) {
  if (!(this instanceof MyWs))
    return new MyWs(options);

  Writable.call(this, options);
}

util.inherits(MyWs, Writable);

MyWs.prototype._write = function (chunk, encoding, callback) {
  console.log(chunk);
  callback();
};

process.stdin.pipe(MyWs());
// 运行方法
// $ echo boop | node writeStream2.js
// <Buffer 27 74 65 73 74 27 0d 0a>
