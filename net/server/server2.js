/**
 *
 * 我使用net.createServer来创建一个服务器实例，这个方法的返回值是一个net.Server实例，net.Server提供了listen方法，
 * 让我们监听到某个端口上来接受客户端连接，同时还提供了一些属性，比如maxConnections可以设置服务器的并发连接数上限
 * Created by Rain on 2017/3/11.
 */
var net = require("net");

var server = net.createServer();

server.on('connection', function (sock) {

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
  console.log('echo server bound at port - 8717');
});
