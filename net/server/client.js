/**
 * Created by Rain on 2017/3/11.
 */
var net = require('net');

var client = net.connect({port: 8717}, function () {
  console.log('connected to server!');
  client.write('hello world!\r\n');
});

client.on('data', function (chunk) {
  console.log(chunk.toString());
  client.end();
});

client.on('end', function () {
  console.log("客户端连接断开");
  process.exit();
});
