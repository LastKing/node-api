/**
 * QQ群来的问题
 * Created by Rain on 2017/5/3.
 */
// AES128 ECB加密模式
// 密钥：{32,87,47,82,54,75,63,71,48,80,65,88,17,99,45,43};
// 所有命令要经过AES128加密。
// uint8 key[16] ={32,87,47,82,54,75,63,71,48,80,65,88,17,99,45,43};
// uint8 plainText[16] = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16};
// uint8 encryptedData[16];
// Encrypt( key, plainText, encryptedData );
// 得到已加密数据encryptedData:
// {105,124,191,246,88,193,169,115,137,144,193,150,60,92,252,84};
const crypto = require('crypto');

//data 是准备加密的字符串,key是你的密钥
function encryption(data, key) {
  // var iv = '';
  var iv = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var clearEncoding = 'utf8';
  var cipherEncoding = 'base64';
  var cipherChunks = [];

  var cipher = crypto.createCipheriv('aes128', Buffer.from(key), Buffer.from(iv));
  cipher.setAutoPadding(true);

  cipherChunks.push(cipher.update(Buffer.from(data), clearEncoding, cipherEncoding));
  cipherChunks.push(cipher.final(cipherEncoding));

  return cipherChunks.join('');
}

var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var key = [32, 87, 47, 82, 54, 75, 63, 71, 48, 80, 65, 88, 17, 99, 45, 43];
// var data = "Hello, nodejs. 演示aes-128-cbc加密和解密";
// var key = [1, 2, 3, 4, 5, 6, 7, 8];
const result = encryption(data, key);

console.log(JSON.stringify(new Buffer(result)));
