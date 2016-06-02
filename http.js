/**
 * Created by Rain on 2016/6/2.
 */
var fs = require('fs');
var http = require('http');

var ws = fs.createWriteStream(__dirname + '/test.txt', {start: 0});

for (var i = 0; i < 10; i++) {
  (function (i) {
    http.get('www.baidu.com/'+i, (res)=> {
      // console.log(res);
      ws.write(res.toString(),'utf-8');
    }).on('error', function (e) {
      console.log("错误" + e.message);
    });
  })(i)
}
