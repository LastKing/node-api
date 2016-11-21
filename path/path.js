/**
 * Created by Rain on 2016/9/22.
 */
const path = require('path');

//https://segmentfault.com/a/1190000007471775?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly

/* 获取路径/文件名/扩展名 */
//1. 获取文件名
console.log('1.获取文件名');
console.log(path.basename('/temp/demo/js/test.js', '.js'));//去掉拓展名
console.log(path.basename('/temp/demo/js/test.js'));
console.log(path.basename('/temp/demo/js/test/'));
console.log(path.basename('/temp/demo/js/test'));

//2. 获取路径
console.log('2.获取所在路径');
console.log(path.dirname('/tmp/demo/js/test.js'));

//3. 获取拓展名
console.log('3.获取拓展名');
console.log(path.extname('/tmp/demo/js/test.js'));

/* 路径组装 */
//4. join
console.log('4.path join');
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

//5. resolve
console.log('5.path resolve');

console.log(path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile'));
//相当于：
// cd foo/bar
// cd /tmp/file/
// cd ..
//     cd a/../subfile
// pwd

/* 路径解析 */
//6. normalize  （获取相同目的最短路径）
/**
 * 如果路径为空，返回.，相当于当前的工作路径。
 * 将对路径中重复的路径分隔符（比如linux下的/)合并为一个。
 * 对路径中的.、..进行处理。（类似于shell里的cd ..）
 * 如果路径最后有/，那么保留该/。
 */
var filepath = '/tmp/demo/js/test.js';

var index = 0;

var compare = function (desc, callback) {
  console.log('[用例%d]：%s', ++index, desc);
  callback();
  console.log('\n');
};

compare('路径为空', function () {
  // 输出 .
  console.log(path.normalize(''));
});

compare('路径结尾是否带/', function () {
  // 输出 /tmp/demo/js/upload
  console.log(path.normalize('/tmp/demo/js/upload'));

  // /tmp/demo/js/upload/
  console.log(path.normalize('/tmp/demo/js/upload/'));
});

compare('重复的/', function () {
  // 输出 /tmp/demo/js
  console.log(path.normalize('/tmp/demo//js'));
});

compare('路径带..', function () {
  // 输出 /tmp/demo/js
  console.log(path.normalize('/tmp/demo/js/upload/..'));
});

compare('相对路径', function () {
  // 输出 demo/js/upload/
  console.log(path.normalize('./demo/js/upload/'));

  // 输出 demo/js/upload/
  console.log(path.normalize('demo/js/upload/'));
});

compare('不常用边界', function () {
  // 输出 ..
  console.log(path.normalize('./..'));

  // 输出 ..
  console.log(path.normalize('..'));

  // 输出 ../
  console.log(path.normalize('../'));

  // 输出 /
  console.log(path.normalize('/../'));

  // 输出 /
  console.log(path.normalize('/..'));
});

/* 文件的分解/组合 */
//7. reformat
var p1 = path.format({
  root: '/tmp/',
  base: 'hello.js'
});
console.log(p1); // 输出 /tmp/hello.js

var p2 = path.format({
  dir: '/tmp',
  name: 'hello',
  ext: '.js'
});
console.log(p2);  // 输出 /tmp/hello.js

//8. parse
console.log(path.parse('/home/user/dir/file.txt'));

/* 获取相对路径 */
//9. relative  （从from路径，到to路径的相对路径。）
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')); // 输出 "../../impl/bbb"

console.log(path.relative('/data/demo', '/data/demo')); // 输出 ""

console.log(path.relative('/data/demo', '')); // 输出 "../../Users/a/Documents/git-code/nodejs-learning-guide/examples/2016.11.08-node-path"


/* 平台相关接口/属性 */
// 以下属性、接口，都跟平台的具体实现相关。也就是说，同样的属性、接口，在不同平台上的表现不同。
//
// path.posix：path相关属性、接口的linux实现。
// path.win32：path相关属性、接口的win32实现。
// path.sep：路径分隔符。在linux上是/，在windows上是``。
// path.delimiter：path设置的分割符。linux上是:，windows上是;。
// 注意，当使用 path.win32 相关接口时，参数同样可以使用/做分隔符，但接口返回值的分割符只会是``。

console.log(process.env.PATH);
// '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'  (windows 和 linux 有区别，只是地址的区别 ）

console.log(process.env.PATH.split(path.delimiter));
// returns ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']

