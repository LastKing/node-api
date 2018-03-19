# children_process学习

首先知识点罗列：同步进程就忽略把。。。
异步创建进程4种方式：
1. exec 衍生shell，执行语句
2. execFile 不衍生shell，指定可运行file （以上二者都是将结果写入缓存区[200kb]小心溢出,
最后将结果写入err，stdout,stderr中，直接callback接受即可）
3. fork 这个貌似是成一个新node.js进程，直接调用js文件，并且可以在父子进程之间通过send()进行通讯
4. spawn 指定运行命令，参数列表，options，三个参数 [所有的参数都需要使用事件监听，完成接受）

3 注意其中的ipc功能，进行进程间通讯，options.stdio参数
4 注意其中的send message功能，

以上4者都返回了 一个ChildProcess对象，上面各种事件，以及数据监听的stderr,stdout等重要的辅助对象，可读可写流

没有彻底了解的问题，ipc问题
Node.js 内建 IPC 的问题 [参考2中简述这类问题]
Node.js 创建守护进程时，detached  和 stdio 两个参数的具体意义

参考：
1. 官方文档，最重要的
2. 引发这一堆思考的文章（其中children_process部分）[Node.js cluster 踩坑小结](https://zhuanlan.zhihu.com/p/27069865)
3. 参考2的更新版本[进程](https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/process.md#process)
4. demo文件例子出处[fork的一个例子](http://blog.csdn.net/chy555chy/article/details/52556318)