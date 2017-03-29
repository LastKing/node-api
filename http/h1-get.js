/**
 * Created by Rain on 2016/11/28.
 */
const http = require('http');

const querystring = require('querystring');

var postData = querystring.stringify({
  'msg': 'Hello World!'
});

var options = {
  hostname: 'www.baidu.com',
  port: 80,
  path: '/',
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
};

http.get('http://www.baidu.com', function (res) {
  console.log('get response code : ' + res.statusCode);

  var result;
  res.setEncoding('utf8');  //gbk 类的编码 ，node本身不自带 解析，需要第三方工具 去拓展
  res.on('data', function (chunk) {
    result += chunk;
  });

  res.on('end', function () {
    console.log(result);
  })

}).on('error', function (err) {
  console.log('Got error:' + err.message);
});


