/**
 * Created by Rain on 2016/11/19.
 */
const fs = require('fs');
const path = require('path');

//16.检视文件
/**
 * file 完整路径及文件名；
 * [options]  persistent true表示持续监视，不退出程序；
 *            interval 单位毫秒，表示每隔多少毫秒监视一次文件
 * listener   文件发生变化时回调，有两个参数：
 *                  curr为一个fs.Stat对象，被修改后文件
 *                  prev,一个fs.Stat对象，表示修改前对象
 */
fs.watchFile(__dirname + '/test.txt', {interval: 20}, function (curr, prev) {
  if (Date.parse(prev.ctime) == 0) {
    console.log('文件被创建!');
  } else if (Date.parse(curr.ctime) == 0) {
    console.log('文件被删除!')
  } else if (Date.parse(curr.mtime) != Date.parse(prev.mtime)) {
    console.log('文件有修改');
  }
});

fs.watchFile(__dirname + '/test.txt', function (curr, prev) {
  console.log('这是第二个watch,监视到文件有修改');
});

//17.取消检视文件
/**
 * file, 完整路径及文件名；
 * [listener], 要取消的监听器事件，如果不指定，则取消所有监听处理事件
 */

var listener = function (curr, prev) {
  console.log('我是监视函数')
};
fs.unwatchFile(__dirname + '/test.txt', listener);


//18.监视文件或目录
// 对文件或目录进行监视，并且在监视到修改时执行处理；
// fs.watch返回一个fs.FSWatcher对象，拥有一个close方法，用于停止watch操作；
// 当fs.watch有文件变化时，会触发fs.FSWatcher对象的change(err, filename)事件，err错误对象，filename发生变化的文件名
// fs.watch(filename, [options], [listener]);

/**
 * file 完整路径以及文件名或目录名
 * [listener(event, filename], 监听器事件，有两个参数：
 *        event 为rename表示指定的文件或目录中有重命名、删除或移动操作或change表示有修改
 *        filename表示发生变化的文件路径
 */
var fsWatcher = fs.watch(__dirname, function (event, filename) {
  console.log(event);
});

fsWatcher.on('change', function (event, filename) {
  console.log(filename + ' 发生变化')
});

//30秒后关闭监视
setTimeout(function () {
  console.log('关闭');
  fsWatcher.close(function (err) {
    if (err) {
      console.error(err)
    }
    console.log('关闭watch')
  });
}, 30000);
