/**
 * postman  发送 post 请求才能截取到数据
 * Created by Rain on 2016/9/29.
 */
var http = require('http');

http.createServer(function (req, res) {
  var post = "";
  req.on('data', (chunk)=> {
    post += chunk;
  });

  req.on('end', function () {
    console.log(post);
    res.end(post);
  });

}).listen(3000);
