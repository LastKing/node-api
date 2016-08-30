/**
 * Created by Rain on 2016/8/30.
 */
var http = require('http');

var server = http.createServer((req, res)=> {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write('hello');
  res.end();
});

server.on('connection', function (err, data) {
  console.log(data);
});

// server.get('/',);

server.listen(8080);

