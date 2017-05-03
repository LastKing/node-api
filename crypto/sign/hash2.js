/**
 * Created by Rain on 2017/5/2.
 */
const crypto = require('crypto');

const hash = crypto.createHash('md5');

console.log('test');
hash.update('test');
var test = hash.digest('hex');
console.log(test);

const hash2 = crypto.createHash('md5');
console.log(JSON.stringify(Buffer.from("test")));
hash2.update(Buffer.from("test"));
var test2 = hash2.digest('hex');
console.log(test2);
