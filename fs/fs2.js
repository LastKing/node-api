/**
 * Created by Rain on 2016/11/18.
 */
const fs = require('fs');

//5. 读文件，读取打开的文件内容到缓存区中
/**
 * fd, 使用fs.open打开成功后返回的文件描述符
 * buffer, 一个Buffer对象，v8引擎分配的一段内存
 * offset, 整数，向缓存区中写入时的初始位置，以字节为单位
 * length, 整数，读取文件的长度
 * position, 整数，读取文件初始位置；文件大小以字节为单位
 * callback(err, bytesRead, buffer), 读取执行完成后回调函数，bytesRead实际读取字节数，被读取的缓存区对象
 */
fs.open(__dirname + '/test.txt', 'r', function (err, fd) {
  if (err) {
    console.log(err);
  } else {
    var buffer = new Buffer(255);
    console.log('new Buffer length:' + buffer.length);
    //每个汉字utf 编码是3个字节，英文是1个字节
    fs.read(fd, buffer, 0, 9, 3, function (err, bytesRead, buffer) {
      if (err) {
        throw err;
      } else {
        console.log('1.实际读取字节数：' + bytesRead);
        console.log('输出内容：' + buffer.slice(0, bytesRead).toString());
        //读取完后，再使用fd读取时，基点是基于上次读取位置计算；
        fs.read(fd, buffer, 0, 9, null, function (err, bytesRead, buffer) {
          console.log("2.实际读取字节数：" + bytesRead);
          console.log('输出内容：' + buffer.slice(0, bytesRead).toString());
        });
      }
    })
  }
});

