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

server.listen(8124, function () {
  console.log("服务器已经绑定",server.address());
});


