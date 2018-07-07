/**
 * Created by Rain on 2018/7/7
 */
var request = require('superagent');

// extend with Request#proxy()
require('superagent-proxy')(request);

// HTTP, HTTPS, or SOCKS proxy to use
var proxy = process.env.http_proxy || 'http://171.38.37.220:8123';

request
  .get('http://www.baidu.com')
  .proxy(proxy)
  .end(onresponse);

function onresponse(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.status, res.headers);
    console.log(res.body);
  }
}
