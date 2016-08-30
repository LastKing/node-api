/**
 * Created by Rain on 2016/8/30.
 */
function route(handle, pathname, res, postData) {
  console.log("About to route a request for" + pathname);

  if (typeof handle[pathname] === 'function') {
    handle[pathname](res, postData);
  } else {
    console.error("No request handler found for " + pathname);
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.write("404 Not found");
    res.end();
  }
}

exports.route = route;