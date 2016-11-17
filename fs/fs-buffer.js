/**
 * Created by Rain on 2016/9/1.
 */
const fs = require('fs');

let rs = fs.createReadStream('test.txt', {highWaterMark: 11});
console.log(Buffer.isEncoding(rs));
// rs.setEncoding('utf-8');

let data = '';

rs.on('data', function (trunk) {
  data += trunk;
});

rs.on('end', function () {
  console.log(data);
});

setTimeout(function () {
  fs.readFile('test.txt', function (err, data) {
    console.log(data.toString());
  });
}, 100);

