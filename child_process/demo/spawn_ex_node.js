/**
 * create by toonew on 2018/3/16
 */
const fs = require('fs');
const child_process = require('child_process');

const spawnObj = child_process.spawn(process.execPath, ['./test.js','--inspect'], {});

spawnObj.stdout.on('data', function (chunk) {
  console.log(chunk.toString());
});

spawnObj.stderr.on('data', (data) => {
  console.log(data.toString());
});

spawnObj.on('close', function (code) {
  console.log('close code : ' + code);
});

spawnObj.on('exit', (code) => {
  console.log('exit code : ' + code);
  // fs.close(fd, function (err) {
  //   if (err) {
  //     console.error(err);
  //   }
  // });
});

console.log(process.mainModule);