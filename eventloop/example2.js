/**
 * Created by Rain on 2017/4/22.
 */
var fs = require('fs');

function someAsyncOperation(callback) {
  var time = Date.now();
  // 花费9毫秒
  fs.readFile('./test.pdf', callback);
}

var timeoutScheduled = Date.now();
var fileReadTime=0;
var delay = 0;

setTimeout(function () {
  delay = Date.now() - timeoutScheduled;
}, 5);

someAsyncOperation(function () {
  fileReadTime = Date.now();
  while(Date.now()-fileReadTime<20){
  }
  console.log('setTimeout: ' + (delay) + "ms have passed since I was scheduled");
  console.log('fileReaderTime',fileReadTime - timeoutScheduled);
});