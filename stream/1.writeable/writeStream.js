/**
 * 创建一个自己的流，该案例 使用 stream 模块实现了一个 自己的流
 * 这并不是一个很好的案例，因为重写的是实例的方法
 * 而不是 重写 构造函数 和 原型链上的方法，
 * 所以这里严格意义并不是一个标准的自我实现的流
 * https://github.com/jabez128/stream-handbook
 * Created by Rain on 2016/6/2.
 */
const stream = require('stream');

//1.创建一个writable流
var ws = stream.Writable();

/**
 * @param chunk 代表写进来的数据
 * @param enc   代表编码的字符串,但是只有在opts.decodeString为false的时候你才可以写一个字符串。
 * @param callback  next(err)是一个回调函数，使用这个回调函数你可以告诉数据消耗者可以写更多的数据。
 *               你可以有选择性的传递一个错误对象error，这时会在流实体上触发一个emit事件。
 * @private
 */
ws._write = function (chunk, enc, callback) {    // 1.chunk代表进来的数据 ，enc 编码集
  console.log(chunk);
  callback();
};
process.stdin.pipe(ws);

// 运行方法
// $ echo boop | node writeStream.js
// <Buffer 62 65 65 70 0a>
