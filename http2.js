/**
 * 用来 做 流量监测。。
 * Created by Rain on 2016/6/3.
 */
var http = require('http');

var server = http.createServer(function (req, res) {
  // console.log(req);
  var data = '';
  req.on('data', function (chunk) {
    //chrome 直接传上来的 无法截取， postman的可以
    data += chunk;
  });

  req.on('end', function () {
    console.log(data.toString());
  })
});

server.listen(8081);