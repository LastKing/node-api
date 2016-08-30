/**
 * Created by Rain on 2016/8/30.
 */
var http = require('http');
var url = require('url');

function start(route, handle) {
  var onRequest = (req, res)=> {
    var postData = "";
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");

    req.setEncoding("utf8");
    req.addListener('data', function (postDataChunk) {
      postData += postDataChunk;
      console.log('Received Post data chunk ' + postDataChunk + "'.")
    });

    req.addListener('end', function () {
      route(handle, pathname, res, postData);
    });
  };

  var server = http.createServer(onRequest);

  server.listen(8080);
  console.log("Server has started");
}

exports.start = start;
