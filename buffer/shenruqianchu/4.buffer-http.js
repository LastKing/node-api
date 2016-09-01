/**
 * Created by Rain on 2016/9/1.
 */
var http = require('http');
var helloworld = '';

for (var i = 0; i < 1024810; i++) {
  helloworld += "a";
}

http.createServer((req, res)=> {
  res.writeHead(200);
  res.end(helloworld);
}).listen(8001);


