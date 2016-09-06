/**
 * Created by toonew on 2016/6/7.
 */
var util = require('util');


var bar = 123;
var test = util.debuglog('hello from foo [%d]', bar);

test = util.format('%s:%s', 'foo'); // 'foo:%s'

console.log(test);