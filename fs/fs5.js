/**
 * Created by Rain on 2016/11/18.
 */
const fs = require('fs');
const path = require('path');

//8. 创建 目录
// fs.mkdir(path,[mode],callback

/**
 * path,被创建目录的完整路径及目录名；
 * [mode] 目录权限，默认0777
 * callback(err),创建目录回调函数，err错误对象
 */
// fs.mkdir(__dirname + '/fsDir', function (err) {
//   if (err)throw err;
//   console.log('8.创建文件 ： 创建成功');
// });

//9.读取目录
//使用fs.readdir读取目录，重点其回调函数中files对象
//fs.readdir(path, callback);

/**
 * path, 要读取目录的完整路径及目录名；
 * [callback(err, files)], 读完目录回调函数；err错误对象，files数组，存放读取到的目录中的所有文件名
 */
fs.readdir(__dirname, function (err, files) {
  if (err) {
    throw err;
  } else {
    files.forEach((file) => {
      var filePath = path.normalize(__dirname + '/' + file);
      fs.stat(filePath, (err, stat) => {
        if (stat.isFile()) {
          console.log('file : ' + file);
        }
        if (stat.isDirectory()) {
          console.log('directory :' + file);
        }
      })
    });

    //这个 文件闭包 有问题。。
    // for (var i = 0; i < files.length; i++) {
    //   //使用闭包无法保证读取文件的顺序与数组中保存的致
    //   (function () {
    //     var filePath = path.normalize(__dirname + '/fsDir/' + files[i]);
    //     fs.stat(filePath, (err, stat) => {
    //       if (stat.isFile()) {
    //         console.log(filePath + ' is: ' + 'file');
    //       }
    //       if (stat.isDirectory()) {
    //         console.log(filePath + ' is: ' + 'dir');
    //       }
    //     });
    //   })();
    // }

  }
});
