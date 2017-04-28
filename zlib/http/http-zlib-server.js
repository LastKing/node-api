/**
 * 官方文档 7.9
 * Created by Rain on 2017/4/28.
 */
const zlib = require('zlib');
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  var raw = fs.createReadStream('./http-zlib-index.html');

  var acceptEncoding = req.headers['accept-encoding'];
  if (!acceptEncoding) {
    acceptEncoding = '';
  }

  if (acceptEncoding.match(/bdeflate\b/)) {
    res.writeHead(200, {'Content-Encoding': 'deflate'});
    raw.pipe(zlib.createDeflate()).pipe(res);
  } else if (acceptEncoding.match(/\bgzip\b/)) {
    res.writeHead(200, {'Content-Encoding': 'gzip'});
    raw.pipe(zlib.createGzip()).pipe(res);
  } else {
    res.writeHead(200, {});
    raw.pipe(res);
  }
}).listen(1337);