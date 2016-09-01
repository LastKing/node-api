/**
 * Created by Rain on 2016/6/3.
 */
var http = require('http');

var server = http.createServer(function (req, res) {
  // console.log(req);
  req.on('data', function (data) {
    //chrome 直接传上来的 无法截取， postman的可以
    console.log(data.toString());
  })
});

server.listen(8081);