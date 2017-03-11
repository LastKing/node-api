/**
 * http://blog.csdn.net/foruok/article/details/48434277
 *
 * 这里之所可以 直接 可以直接写 connectionList 在function 中调用
 * node Server的源码 为
 *  this.on('connection', connectionListener);
 *  意思是 监听到 connection 事件就直接调用 connectionListener 操作
 * Created by Rain on 2017/3/11.
 */
var net = require('net');

var server = net.createServer(function (sock) {
  //1.监听client 请求地址和端口
  console.log(`client socked, address - ${sock.remoteAddress}  port -  ${sock.remotePort}`);
  //2.设置请求 字符格式
  sock.setEncoding('utf8');

  //3.欢迎数据
  sock.write('welcome  in server');//发送信息给客户端

  //4.监听client 来的数据
  sock.on('data', function (chunk) {
    sock.write('server talk  client : hello ' + chunk);
    console.log('got data from client =  ' + chunk);//解析客户顿来的数据，可能是很多段
  });

  //5.监听 客户结束请求
  sock.on('end', function () {
    console.log('client disconnected');
  });

  //6.监听 请求错误信息
  sock.on('error', function (err) {
    console.error('socket error - ', err);
  });
});

server.maxConnections = 10;
server.listen(8717, function () {
  console.log('echo server 监听 port - 8717');
});
