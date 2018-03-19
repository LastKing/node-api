# console学习

1. console.log 在node中是同步还是异步的？
答案：是不确定，根据“系统”“环境”的不同
首先看看node中的console.log的实现原理
```js
//简化代码8.10的实现代码比这个要复杂，但是核心不变
Console.prototype.log = function (){
    process.stdout.write(
        util.format.apply(this,arguments);
    )
}
```
由上面的代码可以知道，问题转移为process.stdout.write是同步还是异步？

官方文档解释：`A note on process I/O`
* Files: 同步 在 Windows 和 POSIX 下
* TTYs (Terminals): 异步 在 Windows 下， 同步 在 POSIX 下
* Pipes (and sockets): 同步 在 Windows 下， 异步 在 POSIX 下
官方文档有一个警告，我没有太懂，或者理解实际的场景。
参考:
1. [Node中console.log到底是异步还是同步的](http://nekomiao.me/2017/06/21/console-log-async-or-sync/)
2. [process官方文档](http://nodejs.cn/api/process.html#process_a_note_on_process_i_o)
