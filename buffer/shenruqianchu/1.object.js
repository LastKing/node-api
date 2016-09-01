/**
 * Created by Rain on 2016/9/1.
 */
var str = "深入浅出node.js";
var buf = new Buffer(str, 'utf-8');
console.log(buf);

var buf2 = new Buffer(100);
console.log(buf2.length);


var buf3 = new Buffer('sss');
buf3.write('string');
console.log(buf3.toString());
