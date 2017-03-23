/**
 * Created by Rain on 2017/3/23.
 */
var http = require('http');
var Server = http.Server;

var server = new Server(function (req, res) {
  res.end('hello');
});

server.listen(3000, function () {
  console.log("listen 3000");
});
