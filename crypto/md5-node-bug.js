/**
 *
 * 这个如果
 * Created by Rain on 2017/4/20.
 */
const crypto = require('crypto');

var text = "hello";
var textmd5 = crypto.createHash('md5').update(text).digest('hex');
var textmd5UTF8 = crypto.createHash('md5').update(text, 'utf-8').digest('hex');
console.log(textmd5);
console.log(textmd5UTF8);
//这是node 4.x 的版本
// 5d41402abc4b2a76b9719d911017c592
// 5d41402abc4b2a76b9719d911017c592

// 这是node 6.x +的版本
// 5d41402abc4b2a76b9719d911017c592
// 5d41402abc4b2a76b9719d911017c592

var textcn = "hello 世界";
var textCNmd5 = crypto.createHash('md5').update(textcn).digest('hex');
var textCNmd5UTF8 = crypto.createHash('md5').update(textcn, 'utf-8').digest('hex');
console.log(textCNmd5);
console.log(textCNmd5UTF8);
//这是node 4.x的版本。。。
// 99b8fa1c74ade005bfa1442b649647f4
// 1aaa8e8010645fe4e3d44ad9745bb94e   (为什么会出现这样的原因类）

// node 6.x +版本
// 1aaa8e8010645fe4e3d44ad9745bb94e
// 1aaa8e8010645fe4e3d44ad9745bb94e

//在node 6.x 以前的版本会有这样一句判断，本来默认是buffer（6.x都是默认buffer)
// if (encoding === 'buffer' && typeof data === 'string')
//   encoding = 'binary';
// 结果这句代码 导致了 对中文hash的值 不正确，显示
