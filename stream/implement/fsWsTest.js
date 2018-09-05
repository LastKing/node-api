/**
 * Created by Rain on 2018/9/5
 */
const {createWriteStream} = require('./fsWs');

let ws = createWriteStream('./test.txt');

//监听drain 事件，在达到缓存的上限，缓存清理完毕后继续写入
ws.on('drain', function () {
  console.log('之前的写入已经完成，可以继续写入');
});

ws.on('finish', function () {
  console.log('流结束了');
});

ws.write('test');
ws.write('test');

//小的输入 (不会压满缓存)
let status1 = ws.write('test');

//大的输入 （会压满缓存)
let str = '';
for (let i = 0; i < 10000; i++) str += "str";
let status2 = ws.write(str);

//输出可否继续写入   --》这里状态指示 表示是否可以继续写入，其实就算false你也可以继续写入，会被无限的压入缓存，等待清理，可能堆到直到内存爆了
console.log(status1, status2);


setTimeout(function () {
  ws.end('end str');
}, 5);