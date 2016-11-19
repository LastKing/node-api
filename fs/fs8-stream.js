/**
 * Created by Rain on 2016/11/19.
 */
const fs = require('fs');
const path = require('path');
/**
 * 流，在应用程序中表示一组有序的、有起点有终点的字节数据的传输手段；
 * Node.js中实现了stream.Readable/stream.Writeable接口的对象进行流数据读写；以上接口都继承自EventEmitter类，因此在读/写流不同状态时，触发不同事件；
 * 关于流读取：Node.js不断将文件一小块内容读入缓冲区，再从缓冲区中读取内容；
 * 关于流写入：Node.js不断将流数据写入内在缓冲区，待缓冲区满后再将缓冲区写入到文件中；重复上面操作直到要写入内容写写完；
 * readFile、read、writeFile、write都是将整个文件放入内存而再操作，而则是文件一部分数据一部分数据操作；
 *
 * -----------------------流读取-------------------------------------
 * 读取数据对象：
 * fs.ReadStream 读取文件
 * http.IncomingMessage 客户端请求或服务器端响应
 * net.Socket    Socket端口对象
 * child.stdout  子进程标准输出
 * child.stdin   子进程标准入
 * process.stdin 用于创建进程标准输入流
 * Gzip、Deflate、DeflateRaw   数据压缩
 * 触发事件：
 * readable  数据可读时
 * data      数据读取后
 * end       数据读取完成时
 * error     数据读取错误时
 * close     关闭流对象时
 *
 * 读取数据的对象操作方法：
 * read      读取数据方法
 * setEncoding   设置读取数据的编
 * pause     通知对象众目停止触发data事件
 * resume    通知对象恢复触发data事件
 * pipe      设置数据通道，将读入流数据接入写入流；
 * unpipe    取消通道
 * unshift   当流数据绑定一个解析器时，此方法取消解析器
 *
 * ------------------------流写入-------------------------------------
 * 写数据对象：
 * fs.WriteStream           写入文件对象
 * http.clientRequest       写入HTTP客户端请求数据
 * http.ServerResponse      写入HTTP服务器端响应数据
 * net.Socket               读写TCP流或UNIX流，需要connection事件传递给用户
 * child.stdout             子进程标准输出
 * child.stdin              子进程标准入
 * Gzip、Deflate、DeflateRaw  数据压缩
 *
 * 写入数据触发事件：
 * drain            当write方法返回false时，表示缓存区中已经输出到目标对象中，可以继续写入数据到缓存区
 * finish           当end方法调用，全部数据写入完成
 * pipe             当用于读取数据的对象的pipe方法被调用时
 * unpipe           当unpipe方法被调用
 * error            当发生错误
 *
 * 写入数据方法：
 * write            用于写入数据
 * end              结束写入，之后再写入会报错；
 */


//20. 创建读取流
/**
 * path 文件路径
 * [options] flags:指定文件操作,默认'r',读操作
 *           encoding ：指定读取流编码
 *           autoClose：是否读取完成后自动关闭，默认true
 *           start指定文件开始读取位置
 *           end指定文件开始读结束位置
 */
var rs = fs.createReadStream(__dirname + '/test.txt', {start: 0, end: 11});
rs.on('open', function (fd) {
  console.log('开始读取文件');
});

rs.on('data', function (data) {
  console.log(data.toString());
});

rs.on('end', function () {
  console.log('读取文件结束');
});

rs.on('close', function () {
  console.log('文件关闭');
});

rs.on('error', function (err) {
  console.error(err);
});

//暂停和回复文件读取；
rs.on('open', function () {
  console.log('开始读取文件');
});

rs.pause();

rs.on('data', function (data) {
  console.log(data.toString());
});

setTimeout(function () {
  rs.resume();
}, 2000);


//21、 创建写入流

/**
 *  ws.write(chunk, [encoding], [callback]);
 * chunk,  可以为Buffer对象或一个字符串，要写入的数据
 * [encoding],  编码
 * [callback],  写入后回调
 */

/**
 * ws.end([chunk], [encoding], [callback]);
 * [chunk],  要写入的数据
 * [encoding],  编码
 * [callback],  写入后回调
 */
var ws = fs.createWriteStream(__dirname + '/test.txt', {start: 0});
var buffer = new Buffer('我也喜欢你');

ws.write(buffer, 'utf8', function (err, buffer) {
  console.log(arguments);
  console.log('写入完成，回调函数没有参数');
});

//最后再写入的内容
ws.end('再见');

//使用流完成复制文件操作
var rs2 = fs.createReadStream(__dirname + '/test.txt');
var ws2 = fs.createWriteStream(__dirname + '/test2.txt');

rs2.on('data', function (data) {
  ws2.write(data);
});

ws2.on('open', function (fd) {
  console.log('要写入的数据文件已经打开，文件描述符是：' + fd);
});

rs2.on('end', function () {
  console.log('文件读取完成');
  ws2.end('完成', function () {
    console.log('文件全部写入完成');
  })
});


//关于WriteStream对象的write方法返回一个布尔类型，当缓存区中数据全部写满时，返回false;
//表示缓存区写满，并将立即输出到目标对象中

//第一个例子
var ws = fs.createWriteStream(__dirname + '/test/test.txt');
for (var i = 0; i < 10000; i++) {
  var w_flag = ws.write(i.toString());
  //当缓存区写满时，输出false
  console.log(w_flag);
}


//第二个例子
var ws = fs.createWriteStream(__dirname + '/test/untiyou.mp3');
var rs = fs.createReadStream(__dirname + '/test/Until You.mp3');
rs.on('data', function (data) {
  var flag = ws.write(data);
  console.log(flag);
});

//系统缓存区数据已经全部输出触发drain事件
ws.on('drain', function () {
  console.log('系统缓存区数据已经全部输出。')
});

// 22、管道pipe实现流读写
//rs.pipe(destination, [options]);
/**
 * destination 必须一个可写入流数据对象
 * [opations] end 默认为true，表示读取完成立即关闭文件；
 */

var rs = fs.createReadStream(__dirname + '/test/Until You.mp3');
var ws = fs.createWriteStream(__dirname + '/test/untiyou.mp3');
rs.pipe(ws);
rs.on('data', function (data) {
  console.log('数据可读')
});
rs.on('end', function () {
  console.log('文件读取完成');
  //ws.end('再见')
});
