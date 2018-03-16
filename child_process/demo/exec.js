/**
 * create by toonew on 2018/3/16
 */
require('child_process').exec('dir', {encoding: "utf-8"}, function (err, stdout, stderr) {
  if (err) {
    console.log(err.stack);
    console.log('Error code: ' + err.code);
    console.log('Signal received: ' + err.signal);
  }
  //console.log(err, stdout, stderr);
  console.log('data : ' + stdout);
}).on('exit', function (code) {
  console.log('子进程已退出, 退出码 ' + code);
});