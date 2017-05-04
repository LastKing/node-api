/**
 * Created by Rain on 2016/11/28.
 */
const net = require('net');

const server = net.createServer(function (socket) {
  console.log("服务器已连接");

  //发送
  socket.write("Hello Client!\r\n");//当连接是发送 Hello 信息
  socket.pipe(socket);//将输入 流  输出。。

  //接受
  var result = "";
  socket.on('data', function (chunk) {
    result += chunk;
  });

  socket.on('end', function () {
    console.log(`client say : ${result}`);
    console.log("服务器已断开");
  });

  socket.on('error', function (err) {
    console.log(`socket error: ${err}`);
  });
});

//net  server 的 错误事件 监听
server.on('error', function (err) {
  console.log("server  error: " + err);
});

server.maxConnection = 10;
server.listen(8124, function () {
  console.log("服务器已经绑定", server.address());
});
