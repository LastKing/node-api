/**
 * create by toonew on 2018/9/8
 */
const net = require('./net');

let server = net.createServer(function (socket) {
  socket.end('test');
});

server.listen(3000, function (err, result) {
  console.log('监听3000端口');
});
