# node process 学习

1. 区分操作系统process和node.js的process对象<br/>
   * 系统通过Unix的ps命令，win的tasklist感知进程
   * node process可能因为c++ binding的原因，导致功能混合的厉害：
     * 进程基础信息
     * 进程 Usage
     * 进程级事件
     * 系统账户信息
     * 环境变量
     * 信号收发
     * 三个标准流
     * Node.js 依赖模块/版本信息
     * nextTick
     * ...

反正这玩也，有点迷，乱七八啥都有。。



参考：
1. [nodejs只看前面关于process的部分](https://zhuanlan.zhihu.com/p/27069865)