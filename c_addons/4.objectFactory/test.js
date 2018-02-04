/**
 * Created by Rain on 2017/4/26.
 */
const addon = require('./build/Release/addon');

const obj1 = addon('hello');
const obj2 = addon('world');

console.log(`${obj1.msg} ${obj2.msg}`);
