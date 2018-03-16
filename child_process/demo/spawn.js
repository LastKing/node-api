/**
 * create by toonew on 2018/3/16
 */
var child_process = require('child_process');
var spawnObj = child_process.spawn('ping', ['127.0.0.1'], {encoding: 'utf-8'});

spawnObj.stdout.on('data', function (chunk) {
  console.log(chunk.toString());
});

spawnObj.stderr.on('data', (data) => {
  console.log(data);
});

spawnObj.on('close', function (code) {
  console.log('close code : ' + code);
});

spawnObj.on('exit', (code) => {
  console.log('exit code : ' + code);
  fs.close(fd, function (err) {
    if (err) {
      console.error(err);
    }
  });
});