/**
 * Created by Rain on 2016/7/27.
 */
const str = '\u00bd + \u00bc = \u00be';

console.log(`${str}: ${str.length} characters, ` +
    `${Buffer.byteLength(str, 'utf8')} bytes`);


const arr = [Buffer('1234'), Buffer('0123')];
console.log(arr.sort(Buffer.compare).toString());


const str2 = "Node.js";
const buf = new Buffer(str2.length);

for (var i = 0; i < str2.length; i++) {
  buf[i] = str2.charCodeAt(i);
}

console.log(buf.toString('ascii'));
// Prints: Node.js