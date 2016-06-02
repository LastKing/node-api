/**
 * Created by Rain on 2016/6/2.
 */
var fs = require('fs');
var http = require('http');
var querystring = require('querystring')
var ws = fs.createWriteStream(__dirname + '/test.txt', {start: 0});

var data = querystring.stringify({
  info:'hi',
  test:5
});

// for (var i = 0; i < 10; i++) {
//   (function (i) {
    var options={
      host:'www.jb51.net',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        'Content-Length': data.length
      }
    };

    http.request(options, (res)=> {
      console.log(res);
      // ws.write(res.toString(),'utf-8');
    }).on('error', function (e) {
      console.log("错误" + e.message);
    });
  // })(i)
// }
