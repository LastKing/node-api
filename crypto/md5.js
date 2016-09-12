/**
 * Created by Rain on 2016/9/12.
 */
const crypto = require('crypto');
const hash = crypto.createHash('md5');

var content = 'password';
//方法 1  as streams
// hash.on('readable', ()=> {
//   var data = hash.read();
//
//   if (data) {
//     console.log(data.toString('hex'));
//   }
// });
//
// hash.write('some data to hash');
// hash.end();


//方法 2
// const fs = require('fs');
// const rs = fs.createReadStream('./md5.txt');
// rs.pipe(hash).pipe(process.stdout);


hash.update(content);
console.log(hash.digest('hex'));




