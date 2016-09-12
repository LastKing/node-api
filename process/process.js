/**
 * Created by Rain on 2016/9/12.
 */
console.log(process.pid);         //当前进程的进程号。

console.log(process.version);     //Node的版本，比如v0.10.18。
console.log(process.platform);    //当前系统平台，比如Linux。
// console.log(process.title);       //默认值为“node”，可以自定义该值。
// console.log(process.argv);        //当前进程的命令行参数数组。
// console.log(process.env);         //指向当前shell的环境变量，比如process.env.HOME。
// console.log(process.execPath);    //运行当前进程的可执行文件的绝对路径。
// console.log(process.stdout);      //指向标准输出。
// console.log(process.stdin);       //指向标准输入。
// console.log(process.stderr);      //指向标准错误。


function log(str) {
  process.stdout.write(format.apply(this, arguments) + '\n');
}
log('test');