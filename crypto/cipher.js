/**
 * 加密
 *
 * Created by Rain on 2017/3/13.
 */
const crypto = require('crypto');

//加密过程
const cipher = crypto.createCipher('aes-256-cbc', 'InmbuvP6Z8');

cipher.update('ss', 'binary', 'hex');
cipher.update('ss', 'binary', 'hex');
cipher.update('ss', 'binary', 'hex');

var str = cipher.final('hex');
console.log(str);

//解密过程
var decipher = crypto.createDecipher('aes-256-cbc', 'InmbuvP6Z8');
decipher.update(str, 'hex', 'utf8');
console.log(decipher.final('utf8'));
