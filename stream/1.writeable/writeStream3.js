/**
 * es6 class实现的流
 * 源码不是用的class ，所以我不深挖了。。
 * create by toonew on 2018/9/1
 */
const {Writable} = require('stream');

class MyWs extends Writable {
  constructor(options) {
    super(options);
  }

  _write(chunk, encoding, callback) {
    console.log(chunk);
    callback();
  }
}

process.stdin.pipe(new MyWs());
// 运行方法
// $ echo boop | node writeStream3.js
// <Buffer 27 74 65 73 74 27 0d 0a>
