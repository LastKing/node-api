/**
 * Created by Rain on 2016/7/27.
 */
const buf = new Buffer([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf.toString('ascii'));

const buf1 = new Buffer('buffer');
const buf2 = new Buffer(buf1);

buf1[0] = 0x61;
console.log(buf1.toString());// 'auffer'
console.log(buf2.toString());// 'buffer' (copy is not changed)

const arr = new Uint16Array(2);
arr[0] = 5000;
arr[1] = 4000;

const buf3 = new Buffer(arr.buffer); // shares the memory with arr;
console.log(buf3);

const buf4 = new Buffer(5);
console.log(buf4);
// <Buffer 78 e0 82 02 01>
// (octets will be different, every time)
buf4.fill(0);
console.log(buf4);
// <Buffer 00 00 00 00 00>

const buf5 = new Buffer('this is a tést');
console.log(buf5.toString());
// prints: this is a tést
console.log(buf5.toString('ascii'));
// prints: this is a tC)st

const buf6 = new Buffer('7468697320697320612074c3a97374', 'hex');
console.log(buf6.toString());