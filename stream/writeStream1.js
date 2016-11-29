/**
 * Created by toonew on 2016/11/24.
 */
const stream = require('stream');

let Writable = stream.Writable;

let ws1 = Writable();

/**
 *
 * @param chunk 代表写进来的数据
 * @param enc   代表编码的字符串,但是只有在opts.decodeString为false的时候你才可以写一个字符串。
 * @param next  next(err)是一个回调函数，使用这个回调函数你可以告诉数据消耗者可以写更多的数据。
 *               你可以有选择性的传递一个错误对象error，这时会在流实体上触发一个emit事件。
 * @private
 */
ws1._write = function (chunk, enc, next) {
  console.log(chunk);
  next();
};

// (echo beep; sleep 1; echo boop) | node write0.js
process.stdin.pipe(ws1);
///这个结果 只在linux下 生效，windows 应该不这么写的。
// <Buffer 62 65 65 70 0a>
// <Buffer 62 6f 6f 70 0a>


