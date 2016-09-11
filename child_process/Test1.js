/**
 * Created by toonew on 2016/9/12.
 */
const cp = require('child_process');
var options = {encoding: "gbk"};

cp.exec('dir', function (err, options, result) {
  console.log(result);
});
