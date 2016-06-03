var net = require('net');

var hostToPort = {
  '127.0.0.1': 8080,
  'localhost': 8081
};

var server = net.createServer(function (socket) {
  var upsteamSocket;

  socket.on('data', function (data) {
    if (!upsteamSocket) {
      var dataString = data.toString();
      var host = dataString.split('\n')[1].split(':')[1].trim();

      upsteamSocket = new net.Socket();
      upsteamSocket.connect(hostToPort[host], function () {
        upsteamSocket.write(data);
      });
      upsteamSocket.on('data', function (data) {
        socket.write(data);
      })
    } else {
      upsteamSocket.write(data);
    }
  });
});

server.listen('3000');