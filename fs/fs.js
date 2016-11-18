/**
 * Created by Rain on 2016/11/17.
 */
const fs = require('fs');
const path = require('path');

//1. 读取文件readFile函数
/**
 * file 文件路径
 * [options] 可指定encoding及flag ，（文件操作选项 如 r+ 读写 ； w+ 读写，文件不存在则创建）等参数
 * callback
 */
fs.readFile(__dirname + '/test.txt', {flag: 'r+', encoding: 'utf-8'}, function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('1.readFile   ： ' + data);
});


//2. 写文件
let w_data = '这是一段即将写入fs.writeFile中的内容';
// let w_data = new Buffer(w_data);

/**
 * file 文件
 * data 写入的内容，可以是 buffer，也可以是字符
 * [options] flag,mode（权限） ,encoding
 * callback 读取文件后的回调函数，函数默认第一个err ，第二个 data 数据
 */
fs.writeFile(__dirname + '/test2.txt', w_data, {flag: 'a'}, function (err) {
  err ? console.error(err) : console.log('2.writeFile ： 写入成功');
});


//3. 以追加方式写文件
fs.appendFile(__dirname + '/test3.txt', '使用fs.appendFile', function (err) {
  err ? console.error(err) : console.log('3.appendFile ：写入成功');
});

//4. 打开文件
/**
 * file 文件
 * flags  操作标识，如"r",读方式打开
 * [mode] 权限，如777，表示任何用户读写可执行
 * callback 打开文件后回调函数，参数默认第一个err，第二fd是一个表示打开文件返回的描述符，windows中的文件句柄
 */
fs.open(__dirname + '/test.txt', 'r', '0666', function (err, fd, result) {
  console.log('4.' + fd);
});







