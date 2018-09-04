/**
 * es6 class 实现一个自己的可读流
 * create by toonew on 2018/9/1
 */
const {Readable} = require('stream');

class MyReadable extends Readable {
  constructor(options) {
    super(options);
  }

  _read(size) {
    console.log(size);
  }
}

let ra = new MyReadable();
ra.push("hello world!~!~");
ra.pipe(process.stdout);
