/**
 * 可以访问外部的global对象，但是不能访问其他变量
 *
 * Created by Rain on 2018/8/22
 */
const vm = require('vm');

var p = 5;
global.p = 11;

vm.runInThisContext(`console.log('ok',p,p=p+1)`);
vm.runInThisContext(`console.log(global.p)`);

console.log(global.p);

// vm.runInThisContext(code,options)  等价于   vm.createScript(code, options).runInThisContext(options);

var p2 = 5;
global.p2 = 21;

let options = {};
let code = vm.createScript(`console.log('ok',p2,p2=p2+1)`, options);
code.runInThisContext(options);

console.log(global.p2);
