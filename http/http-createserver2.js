/**
 * Created by Rain on 2016/8/30.
 */
var http = require('http');

var onResponse = function (req, res) {
  //这个只会抓取post表单里面的内容
  req.on('data', function (data) {
    console.log(data.toString());
  });
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write('hello');
  res.end();
};

// var server = http.createServer(onResponse);
var server = http.createServer();

server.on('request', onResponse);

server.listen(8080);
