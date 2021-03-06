/**
 * 内容压缩
 * deflate 是一个无专利的压缩算法，可以无损压缩数据
 * gzip 是一个DEFLATE进行压缩数据的另一个压缩库。
 * Created by Rain on 2017/4/28.
 */
const zlib = require('zlib');

const input = '.................................';
zlib.deflate(input, (err, buffer) => {
  if (!err) {
    console.log(buffer.toString('base64'));
  } else {
    // handle error
  }
});

const buffer = Buffer.from('eJzT0yMAAGTvBe8=', 'base64');
zlib.unzip(buffer, (err, buffer) => {
  if (!err) {
    console.log(buffer.toString());
  } else {
    // handle error
  }
});
