var net = require('net');

var hostToPort = {
  '127.0.0.1': 8080,
  'localhost': 8081
};

var server = net.createServer(function (socket) {
  var upstreamSocket;

  socket.on('data', function (data) {
    if (!upstreamSocket) {
      var dataString = data.toString();
      var host = dataString.split('\n')[1].split(':')[1].trim();

      upstreamSocket = new net.Socket();
      upstreamSocket.connect(hostToPort[host], function () {
        upstreamSocket.write(data);
      });
      upstreamSocket.on('data', function (data) {
        socket.write(data);
      });
    } else {
      upstreamSocket.write(data);
    }
  });
});

server.listen('3000');