/**
 * Created by Rain on 2016/11/18.
 */
const fs = require('fs');

//4. 打开文件
/**
 * file 文件
 * flags  操作标识，如"r",读方式打开
 * [mode] 权限，如777，表示任何用户读写可执行  （es6 为了防止新手用0补齐位数，使用 0o 代表 八进制）
 * callback 打开文件后回调函数
 *          第一个 err
 *          第二个 fd 是一个表示打开文件返回的描述符，windows中的文件句柄
 */
fs.open(__dirname + '/test.txt', 'r', 0o666, function (err, fd) {
  console.log('4.fd序号：' + fd);
});


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
    console.log('5-1.new Buffer length:' + buffer.length);
    //每个汉字utf 编码是3个字节，英文是1个字节
    fs.read(fd, buffer, 0, 9, 3, function (err, bytesRead, buffer) {
      if (err) {
        throw err;
      } else {
        console.log('5-2.实际读取字节数：' + bytesRead);
        console.log('5-3.输出内容：' + buffer.slice(0, bytesRead).toString());
        //读取完后，再使用fd读取时，基点是基于上次读取位置计算；
        fs.read(fd, buffer, 0, 9, null, function (err, bytesRead, buffer) {
          console.log("5-4.实际读取字节数：" + bytesRead);
          console.log('5-5.输出内容：' + buffer.slice(0, bytesRead).toString());
        });
      }
    })
  }
});

/**
 * 思考这个 地方 如果fs.read 结果一样，不太懂这个 fd 到底是怎么运转的
 */