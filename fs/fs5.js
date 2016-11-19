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


    for (var i = 0; i < files.length; i++) {
      //使用闭包无法保证读取文件的顺序与数组中保存的致
      (function () {
        var filePath = path.normalize(__dirname + '/' + files[i]);
        fs.stat(filePath, (err, stat) => {
          if (stat.isFile()) {
            console.log(filePath + ' is: ' + 'file');
          }
          if (stat.isDirectory()) {
            console.log(filePath + ' is: ' + 'dir');
          }
        });
      })();
    }
  }
});

//11.查看文件与目录是否存在
/**
 * path   要查看的目录/文件的完整路径
 * callback(exists)  操作完成回调函数；exists true 存在，false表示不存在
 */
fs.exists(__dirname + '/fs.js', function (exists) {
  console.log(exists ? '文件存在' : '文件不存在');
});

//12.修改文件访问时间和 修改时间
/**
 * path  要查看目录/文件的完整路径
 * atime 新的访问时间
 * ctime 新的修改时间
 * call(err) 回调
 */
fs.utimes(__dirname + '/test.txt', new Date(), new Date(), function (err) {
  if (err) {
    console.log(err);
    return;
  }
  fs.stat(__dirname + '/test.txt', function (err, stat) {
    if (err) {
      console.error(err);
      return;
    }
    console.log('访问时间: ' + stat.atime.toString() + '; \n修改时间：' + stat.mtime);
    console.log(stat.mode);
  });
});

//13.修改文件或者目录的权限
/**
 * path, 要查看目录/文件的完整路径及名；
 * mode, 指定权限，如：0666 8进制，权限：所有用户可读、写，
 * callback(err) 操作完成回调函数；err操作失败对象
 */
fs.chmod(__dirname + '/fsDir', 0o666, function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('修改权限成功')
});

