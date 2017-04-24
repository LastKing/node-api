/**
 * Created by Rain on 2017/4/22.
 */
var fs = require('fs');

function someAsyncOperation(callback) {
  // 花费2毫秒
  fs.readFile(__dirname + '/' + __filename, callback);
}

var timeoutScheduled = Date.now();
var fileReadTime = 0;

setTimeout(function () {
  var delay = Date.now() - timeoutScheduled;
  console.log('setTimeout: ' + (delay) + "ms have passed since I was scheduled");
  console.log('fileReaderTime', fileReadTime - timeoutScheduled);
}, 10);

someAsyncOperation(function () {
  fileReadTime = Date.now();
  while (Date.now() - fileReadTime < 20) {

  }
});

/*
当程序启动 event loop 初始化
1. timer 阶段 （无callback 到达，setTimeOut 需要10ms）
2. i/o callback阶段，无异步 i/o完成
3. idle,prepare忽略
4. poll阶段，阻塞在这里，当运行2ms时，fs.readFile完成，将其callback 加入 poll队列，
   并执行callback,其中callback需要消耗20ms，等待callback完成，poll处于空闲，
   由于之前设定了timer，因此检测timer，发现timer设定时间是10ms，当前时间运行超过该值。
   因此，立即循环回到timer阶段执行callback，虽然setTimeOut的10ms ，但实际是22ms之后
 */

