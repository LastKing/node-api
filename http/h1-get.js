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

http.get('http://www.qq.com', function (res) {
  console.log('get response code : ' + res.statusCode);

  res.on('data', function (result) {
    console.log(result.toString());
  })

}).on('error', function (err) {
  console.log('Got error:' + err.message);
});


