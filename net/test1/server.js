/**
 * Created by Rain on 2016/11/28.
 */
const net = require('net');
const server = net.createServer(function (c) {
  console.log("服务器已连接");

  c.on('end', function () {
    console.log("服务器已断开");
  });

  c.write("hello Bigbear!\r\n");
  c.pipe(c);
});

server.maxConnection = 10;
server.listen(8124, function () {
  console.log("服务器已经绑定", server.address());
});

// 两种方式
// const client = net.createConnection({port: 8124}, () => {
//   //'connect' listener
//   console.log('connected to server!');
//   client.write('world!\r\n');
// });
// client.on('data', (data) => {
//   console.log(data.toString());
//   client.end();
// });
// client.on('end', () => {
//   console.log('disconnected from server');
// });