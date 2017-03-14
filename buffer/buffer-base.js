/**
 * Created by Rain on 2017/2/27.
 */
var buffer = new Buffer('s');

console.log(JSON.stringify(buffer));

console.log(typeof buffer);
console.log(buffer);
//一个buffer对象 隐式原型连
// buffer --> Buffer --> Unit8Array  --> TypedArray --> Object

console.log('******   buffer2 ********');
var buffer2 = new Buffer('我');
console.log(buffer2);
console.log(buffer2.toString('binary'));
console.log(buffer2.toString('hex'));
console.log(buffer2.toString('UTF-8'));
console.log(buffer2.toString('ASCII'));
console.log(buffer2.toString('base64'));

console.log("******   buffer3 *******");
var buffer3 = new Buffer('我', 'ascii');
console.log(buffer3);
console.log(buffer3.toString('hex'));