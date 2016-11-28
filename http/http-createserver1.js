/**
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
