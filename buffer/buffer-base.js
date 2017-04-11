/**
 * 该  例子说明了两点，
 * 1. buffer 二进制存储， 数组10进制或者16进制展示
 * 2. node的buffer  Unit8Array实际存储， typeArray 负责操作
 * Created by Rain on 2017/2/27.
 */
var buffer = new Buffer('s');

console.log(typeof buffer);
console.log(buffer);                 //buffer  16进制显示
console.log(JSON.stringify(buffer)); // 数组  10进制显示，2^8 ,所以就有0~256 可能性

//一个buffer对象 隐式原型连
// buffer --> Buffer --> Unit8Array  --> TypedArray --> Object

console.log('\n\n******   buffer2 ********');
var buffer2 = new Buffer('我');
console.log(buffer2); //<Buffer e6 88 91>  buffer 二进制的16进制显示
console.log(buffer2.toString('binary'));
console.log(buffer2.toString('hex'));
console.log(buffer2.toString('UTF-8'));
console.log(buffer2.toString('ASCII'));
console.log(buffer2.toString('base64'));
//计算机只负责 存储二进制数据，具体怎么展示由你的程序决定。

console.log("\n******   buffer3 *******");
var buffer3 = new Buffer('我', 'ascii');
console.log(buffer3);
console.log(buffer3.toString('hex'));
