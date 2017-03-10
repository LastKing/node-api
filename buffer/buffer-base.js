/**
 * Created by Rain on 2017/2/27.
 */
var buffer = new Buffer('s');

console.log(JSON.stringify(buffer));

console.log(typeof buffer);
console.log(buffer);
//一个buffer对象 隐式原型连
// buffer --> Buffer --> Unit8Array  --> TypedArray --> Object
