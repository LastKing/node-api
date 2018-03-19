/**
 * Created by Rain on 2018/3/19
 */
const fs = require('fs');

fs.open('./test.txt', 'w', function (err, fd) {

  console.log(fd);
  while (true) {
    fs.write(fd, process.pid + '\n', function () {});
  }

});
