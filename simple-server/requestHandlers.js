/**
 * Created by Rain on 2016/8/30.
 */

function start(res) {
  console.log("访问/star时调用这个。");
  var content = "Hello Start";
  setTimeout(function () {
    content = "Hello Start2";

    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write(content);
    res.end();
  }, 2000);
}

function index(res) {

  console.log("Request handler 'start' was called.");
  var body = '<html>' + '<head>' +
      '<meta http-equiv="Content-Type" content="text/html; ' +
      'charset=UTF-8" />' +
      '</head>' +
      '<body>' +
      '<form action="/upload" method="post">' +
      '<textarea name="text" rows="20" cols="60"></textarea>' +
      '<input type="submit" value="Submit text" />' +
      '</form>' +
      '</body>' +
      '</html>';
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(body);
  res.end();
}


function upload(res, postData) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write("访问/upload时调用这个。" + postData);
  res.end();
}


module.exports = {
  start: start,
  upload: upload,
  index: index
};

