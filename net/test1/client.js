/**
 * Created by Rain on 2016/11/28.
 */
const net = require('net');

var client = net.connect({port: 8124}, function () {
  console.log("客户端已经连接");
  client.write('Hello,Baby\r\n');
});

client.on("data", function (data) {
  console.log(data.toString());
  client.end();
});

client.on("end", function () {
  console.log("客户端断开连接");
});
