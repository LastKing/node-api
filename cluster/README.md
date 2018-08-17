# cluster 学习


demo1 demo2 demo3出自参考1 2，对cluster 的演化过程又基本了解，也了解了基本的ipc流程


这个cluster涉及了 大量的知识，混合运用，以及一些底层api上不会写的方法。。。。真的日了狗了

1. 了解 child_process 中的 exec  spawn fork 基本概念（fork是用spawn包装的专门用来运行node程序的）
2. 了解 process 中的send方法，可以完成fork生成node 父子进程完成通讯
    1. 普通的信息 on('messages')可以监听到
    2. 信息中包含{cmd: 'NODE_xxxx'} on('internalMessage') 监听的 （具体参见文档child_process中）
3. cluster master 和 work的判断,通过fork会传入很多值,最重要的一个`NODE_UNIQUE_ID`，
    了解child_process的fork 基本过程，以及基本参数
4. cluster 




参考：
1. cluster基本流程(上)[链接](http://taobaofed.org/blog/2015/11/03/nodejs-cluster/)
2. cluster基本流程(下)[链接](http://taobaofed.org/blog/2015/11/10/nodejs-cluster-2/)
3. 基本完整剖析了整个cluster过程[链接](https://cnodejs.org/topic/596ffb9b3f0ab31540ed4b91)
4. 类似3的文档，但是更加多代码+注释[链接](https://juejin.im/entry/5b0f34edf265da092406398d)
4. 从process-》ChildrenProcess-》cluster[node cluster](https://zhuanlan.zhihu.com/p/27069865)


