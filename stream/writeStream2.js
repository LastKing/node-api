/**
 * Created by Rain on 2016/11/24.
 */
var fs = require('fs');
var ws = fs.createWriteStream('./test.txt');


ws.write('beep ');

setTimeout(function () {
  ws.end('book \n');
}, 1000);


