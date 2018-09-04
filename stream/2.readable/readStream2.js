/**
 * es5 js方式实现一个自己的可读流
 * create by toonew on 2018/9/1
 */
const {Readable} = require('stream');
const util = require('util');

function MyReadable(options) {
  if (!(this instanceof MyReadable)) {
    return new MyReadable(options);
  }
  Readable.call(this, options);
}

util.inherits(MyReadable, Readable);

MyReadable.prototype._read = function (size) {
  console.log(size);
};

let ra = new MyReadable();
ra.push("hello world!~!~");
ra.pipe(process.stdout);