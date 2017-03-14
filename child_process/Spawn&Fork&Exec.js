/**
 * http://www.tuicool.com/articles/rUZBBja
 * Created by Rain on 2017/3/14.
 */

// child_process.spawn() vs child_process.fork() vs child_process.exec()
//
// Node中有如上三种方式创建一个外部进程，而且都来自于核心模块 child_process

require('child_process').spawn();//用于比较大的数据，支持流，可以与任何命令(bash python ruby 以及其他脚本)一起使用，并且不创建一个新的V8实例

// 官网的例子 就是执行了一个bash命令

require('child_process').fork();//创建一个新的V8实例，实例出多个worker

// 和spawn不同的的是 fork 只执行 node 命令

require('child_process').exec();// 使用Buffer，这使得它不适合比较大的数据和Stream，异步调用，并在回调一次性拿到所有数据

exec();//用的不是事件模式，而是在回调中返回 stdout stderr