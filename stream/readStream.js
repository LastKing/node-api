/**
 * Created by Rain on 2016/6/2.
 */
var fs = require('fs');
var data = "";

var readerStream = fs.createReadStream('./example.txt');

readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
  data += chunk;
});


readerStream.on('end',function(){
  console.log(data);
});

readerStream.on('error', function(err){
  console.log(err.stack);
});

console.log("程序执行完毕");