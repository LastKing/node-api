/**
 * 解决方案 :
 * http://ask.csdn.net/questions/167560
 *
 * 如果是转成gbk 就是这种
 * utf-8 -> decode(to buffer) -> convert to gbk(buffer also) -> write buffer to file.
 * https://www.zhihu.com/question/23800201
 * Created by toonew on 2016/9/12.
 */
const cp = require('child_process');
const iconv = require('iconv-lite');

var encoding = 'cp936';
var binaryEncoding = 'binary';

cp.exec('dir', {encoding: binaryEncoding}, function (err, stdout, stderr) {
  if (err) {
    console.error(err);
  } else if (stderr) {
    console.error(iconv.decode(new Buffer(stderr, binaryEncoding), encoding));
  } else {
    console.log(iconv.decode(new Buffer(stdout, binaryEncoding), encoding));
  }
});
