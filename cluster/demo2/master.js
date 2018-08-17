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
handle.onconnection = function (err, handle) {
  var worker = workers.pop();
  worker.send({}, handle);
  workers.unshift(worker);
};