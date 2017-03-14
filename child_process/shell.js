/**
 * https://segmentfault.com/q/1010000008602161
 * Created by toonew on 2017/3/7.
 */
const EXEC = require('child_process').execSync;
const SPAWN = require('child_process').spawn;
const RL = require('readline');

var fnlist = ["1.bz2"];
var rl = RL.createInterface({
  input: SPAWN('dir').stdout,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {
  //我得到了shell的一行输出
}).on('close', function () {
  //shell完成啦
}).on('error', function (error) {
  console.log(error);
});

