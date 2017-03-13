/**
 * 这个是 hash 算法  与 非对称加密的组合应用
 * Created by Rain on 2017/3/13.
 */
const crypto = require('crypto');
const fs = require('fs');

const privatePem = fs.readFileSync('private.pem');
const publicPem = fs.readFileSync('public.pem');

const privateKey = privatePem.toString();
const publicKey = publicPem.toString();

//根据 私有密钥生成  签名
const sign = crypto.createSign('RSA-SHA256');

var data = 'some data to sign';   //被签名的内容
sign.update(data);
var sig = sign.sign(privateKey, 'hex');
console.log(`sign    :   ${sig.toString('hex')}`);// 内容的签名  信息

//根据 公有密钥 校验 签名
var verify = crypto.createVerify('RSA-SHA256');

verify.update('some data to sign'); //校验的

console.log(verify.verify(publicKey, sig, 'hex'));
