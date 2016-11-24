/**
 * Created by Rain on 2016/11/24.
 */
var http = require('http');

var s = http.createServer(function (req, res) {
  res.writeHead(200, {});
  res.end('foo');
  console.log('http response');
  process.nextTick(function () {
    console.log('tick');
  })
});

s.listen(3000);








