/**
 * Created by toonew on 2016/9/12.
 */
const url = require('url');
const querystring = require('querystring');

var exampleUrl = 'http://localhost:8888/start?foo=bar&hello=world';

var query = url.parse(exampleUrl).query;
var pathname = url.parse(exampleUrl).pathname;

console.log(query);
console.log(pathname);

var params = querystring(exampleUrl);
console.log(params);
