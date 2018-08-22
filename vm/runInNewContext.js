/**
 * runInNewContext 是对runInContext更高层次的封装
 *
 * Created by Rain on 2018/8/22
 */
const vm = require('vm');
const util = require('util');

let window = {
  p: 2,
  vm: vm,
  console: console,
  require: require
};

vm.runInNewContext(`p=3;console.log(typeof global);`, window);

console.log(window.p);
console.log(util.inspect(window));
