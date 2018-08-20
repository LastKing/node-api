/**
 * 饿了么 文章的例子，说有什么性能。。。但是本机测试，并未发生
 * Created by Rain on 2018/8/20
 */
const child_process = require('child_process');

let child = child_process.fork('./child.js');
let data = Array(1024 * 1024).fill('0').join('');

setInterval(() => {
  let i = 100;
  while (i--) child.send(`${data}|${Date.now()}`);
}, 1000);