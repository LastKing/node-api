/**
 * Created by Rain on 2016/11/19.
 */
const fs = require('fs');
const path = require('path');

//14、移动/重命名文件或目录
fs.rename(__dirname + '/test', __dirname + '/fsDir2', function (err) {
  if (err) {
    console.error("14: " + err);
    return;
  }
  console.log('14: 重命名成功')
});

//15、删除空目录
fs.rmdir(__dirname + '/test', function (err) {
  fs.mkdir(__dirname + '/test', 0o666, function (err) {
    console.log('15: 创建目录');
  });
  if (err) {
    console.log('15: 删除空目录失败，可能原因：1、目录不存在，2、目录不为空');
    console.error(err);
    return;
  }
  console.log('15: 删除空目录成功！');
});

//16、删除文件 （这个只删除文件，不删除路径）
fs.unlink(__dirname + '/fsDir2', function (err) {
  err ? console.error('16: ' + err) : console.log('16: 删除成功');
});





