/**
 * Created by toonew on 2017/3/23.
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt:'请输入>'
});

var count = 0;

rl.on('close', function () {
  console.log("exit");
});

rl.on('line', function (line) {
  console.log('输入了' + line);//idea  debug的时候 记得关掉 use console input
});

rl.on('SIGINT', () => {
  rl.question('确定要退出吗？', (answer) => {
    if (answer.match(/^y(es)?$/i)) {
      rl.pause();
      rl.close(); // 触发 close 事件
    }
  });
});
