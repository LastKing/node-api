/**
 *
 * 命令行运行
 *
 * Created by Rain on 2018/8/17
 */
const net = require('net');
const fork = require('child_process').fork;

var workers = [];
for (var i = 0; i < 4; i++) {
  workers.push(fork('./worker.js'));
}

var handle = net._createServerHandle('0.0.0.0', 3002);
handle.listen();
//这个onconncetion 可以理解会有新的链接来时，
//会产生一个新的handle,将这个handle分给work，进行业务处理
handle.onconnection = function (err, handle2) {
  var worker = workers.pop();
  worker.send({}, handle2);
  workers.unshift(worker);
};