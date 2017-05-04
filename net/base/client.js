/**
 * Created by Rain on 2016/11/28.
 */
const net = require('net');

var client = net.connect({port: 8124}, function () {
  console.log("客户端已经连接");
  client.write('Hello,Server'); //发送信息
});

client.on("data", function (data) {
  console.log(`service call : ${data.toString()}`);
  client.end();
});

client.on("end", function () {
  console.log("客户端断开连接");
});


/**
 *  两种方式都是 创建一个tcp连接去连接别人
 *  createConnection只是 client 的别名
 */

// const client = net.createConnection({port: 8124}, () => {
//   console.log('connected to server!');
//   client.write('world!\r\n');
// });
//
// client.on('data', (data) => {
//   console.log(data.toString());
//   client.end();
// });
// client.on('end', () => {
//   console.log('disconnected from server');
// });