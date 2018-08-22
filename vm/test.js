/**
 * 官方第一个例子  8.11.4
 *
 * create by toonew on 2018/3/17
 */
const vm = require('vm');

const x = 1;

const sandbox = {x: 2};
vm.createContext(sandbox); // Contextify the sandbox.
const code = 'x += 40; var y = 17;';
vm.runInContext(code, sandbox);

console.log(sandbox.x);
console.log(sandbox.y);

console.log(x);
console.log(typeof y);//not is defined