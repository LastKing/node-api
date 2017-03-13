/**
 * 散列算法  主要的几个  md  SHA   系
 * 这个就是 纯hash  算法， 不需要任何 对称加密 密钥或者 非对称加密的公私密钥
 * https://zh.wikipedia.org/wiki/SHA%E5%AE%B6%E6%97%8F
 * Created by Rain on 2016/9/12.
 */
const crypto = require('crypto');
const hash = crypto.createHash('md5');  //还有 sha256，sha512等

var content = 'password';
//方法 1  as streams
hash.on('readable', () => {
  var data = hash.read();

  if (data) {
    console.log("hash1 ：" + data.toString('hex'));
  }
});

hash.write('some data to hash');
hash.end();


//方法 2
const fs = require('fs');
const rs = fs.createReadStream('./hash.txt');
const hash2 = crypto.createHash('md5');
rs.pipe(hash2).pipe(process.stdout);


//方法3
const hash3 = crypto.createHash('md5');
hash3.update('some data to hash');
console.log("hash3 ：" + hash3.digest('hex'));

setTimeout(function () {
  console.log(crypto.getHashes());
}, 100);