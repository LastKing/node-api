/**
 * Created by Rain on 2016/11/22.
 */
const fs = require('fs');

let num = 0;
fs.readdir('./test2', function (err, result) {
  for (file of result) {
    console.log(file);
    fs.readFile(`./test2/${file}`, (err, result) => {
      console.log(result.toString().substring(0, 50));
      console.log(num++);
    })
  }

});
