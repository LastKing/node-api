/**
 * 根据 签名算法 和 一个类似  对称加密一样的 密钥 进行更加安全的出力
 * 注意 这里的secret 是一致的 不是非对称加密的  公私密钥
 * Created by Rain on 2017/3/13.
 */
const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'a secret');

//方式1
hmac.on('readable', () => {
  const data = hmac.read();
  if (data)
    console.log("hmac1  :" + data.toString('hex'));
  // Prints:
  //   7fd04df92f636fd450bc841c9418e5825c17f33ad9c87c518115a45971f7f77e
});

//方式2
hmac.write('some data to hash');
hmac.end();

const fs = require('fs');
const hmac2 = crypto.createHmac('sha256', 'a secret');

const input = fs.createReadStream('./hash.txt');
input.pipe(hmac2).pipe(process.stdout);


// 方式3
const hmac3 = crypto.createHmac('sha256', 'a secret');

hmac3.update('some data to hash');
console.log("hmac3  :" + hmac3.digest('hex'));
// Prints:
//   7fd04df92f636fd450bc841c9418e5825c17f33ad9c87c518115a45971f7f77e