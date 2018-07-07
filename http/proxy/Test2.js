/**
 * Created by Rain on 2018/7/7
 */
var http = require('http');
var ProxyAgent = require('proxy-agent');

// HTTP, HTTPS, or SOCKS proxy to use
var proxyUri = process.env.http_proxy || 'http://171.38.37.220:8123';

var opts = {
  method: 'GET',
  host: 'http://www.baidu.com',
  path: '/',
  // this is the important part!
  agent: new ProxyAgent(proxyUri)
};

// the rest works just like any other normal HTTP request
http.get(opts, onresponse);

function onresponse(res) {
  console.log(res.statusCode, res.headers);
  res.pipe(process.stdout);
}
