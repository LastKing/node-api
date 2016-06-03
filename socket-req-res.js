/**
 * Created by Rain on 2016/6/3.
 */
var http = require('http');
var fs = require('fs');

var ws = fs.createWriteStream('test.txt', 'utf-8');

//可以写入
// http.get('http://www.baidu.com', (res)=> {
//   res.pipe(ws);
// });

// // Error: write after end
// for (var i = 0; i < 30; i++) {
//   (function () {
//     http.get('http://www.baidu.com', (res)=> {
//       res.pipe(ws);
//     });
//   })(i);
// }
// /*  res.pipe 会调用  res.end 结束掉流。。。所有会write时 写入失败 */
//
for (var i = 0; i < 30; i++) {
  (function () {
    http.get('http://www.baidu.com', (res)=> {
      res.on('data', function (data) {
        ws.write(data);
      });
    });
  })(i);
}
