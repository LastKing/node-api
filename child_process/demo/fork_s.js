/**
 * 这个例子不要用WebStorm debug模式运行，
 * 因为WebStorm会调用两次debug，监听同一个端口，导致监听失败
 * create by toonew on 2018/3/16
 */
console.log('parent pid: ' + process.pid);
var fork = require('child_process').fork;

//fork方法返回的是子进程
var child = fork('./fork_c.js');

console.log('fork return pid: ' + child.pid);
child.on('message', function (msg) {
  console.log('parent get message: ' + JSON.stringify(msg));
});
child.send({key: 'parent value'});