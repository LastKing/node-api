/**
 * Created by Rain on 2016/11/24.
 */
//此题出处: https://segmentfault.com/q/1010000006237692?_ea=1094898

console.log(' 开始加载 A 模块');
var b = require('./b.js');
console.log('in a, b is ', b);

exports.func = function () {
  console.log('调用 A 模块成功');
};

console.log('A 模块加载完毕');