/**
 *
 *
 * 命令行运行master.js ，不要用webstorm,不知道他怎么给客户端也传入debug参数了，结果全部用一个端口监听出错了
 * Created by Rain on 2018/8/17
 */
const net = require('net');
const fork = require('child_process').fork;

const handle = net._createServerHandle('0.0.0.0', 3002);

for (let i = 0; i < 4; i++) {
  fork('./worker.js').send({}, handle);
}

