/**
 * 官方文档7.9
 * Created by Rain on 2017/4/28.
 */
const zlib = require('zlib');
const http = require('http');
const fs = require('fs');

const request = http.get({
  host: 'localhost',
  path: '/',
  port: 1337,
  headers: {'Accept-Encoding': 'gzip,defalte'} //百度貌似只支持gzip
});

request.on('response', (req) => {
  var output = fs.createWriteStream('./http-zlib-out.html');

  //根据服务端返回的压缩方式 进行解压
  switch (req.headers['content-encoding']) {
    case'gzip':
      req.pipe(zlib.createGunzip()).pipe(output);
      break;
    case 'deflate':
      req.pipe(zlib.createInflate()).pipe(output);
      break;
    default:
      req.pipe(output);
      break;
  }
})


