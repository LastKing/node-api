/**
 * 不会共享外部global,需要传入SandboxObj
 * 等于是 sandbox 里面形成了这样一种格式
 * (function(sandbox1,sandbox2){
 *   这样传入了 vm 里面，而不是全局
 * })(sandbox1,sandbox2)
 *
 * Created by Rain on 2018/8/22
 */
const vm = require("vm");
const util = require("util");

let window = {
  p: 2,
  vm: vm,
  console: console,
  require: require
};

let p = 5;
global.p = 11;

vm.createContext(window);
vm.runInContext(`p=3;console.log(typeof global);`, window);
// vm.runInContext(`console.log(global)`, window); //global is not defined5

console.log(window.p);

console.log(util.inspect(window));
