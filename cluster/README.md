# cluster 学习

cluster涉及了 大量的知识，混合运用，以及一些底层api上不会写的方法。。。。真的日了狗了

## 基本案例
`cluster.js`为官网给出的最简单的实例,由主建立server，子节点处理，类似 nginx+fork(pm2独立端口)的模式,
由master接受请求，按照Round Robin原则，进行均衡分发，server则进行数据的处理。

### 一、 周边知识点

#### 1. 网络
需要对linux网络编程的中的服务器建立的监听的流程有所了解 [链接](https://blog.csdn.net/ctthuangcheng/article/details/9408541)
socket() --> bind() --> listen() --> accept() 

#### 2. child_process.fork 和process.send 请先行了解，一定要了解清楚，可能一遍不懂，撞见不懂的一定要去查清楚\(官方文档都有\)

node http 在 single 和 cluster 中的区别,分别在哪些地方建立这些步骤。对后面理解cluster 有很大的帮助。


## 参考 1 2 案例分析
demo1 2位cluster的进化历史

1. demo1 建立socket(),并bind()返回handle给每个一个worker，缺点：
    * 惊群现象
    * 无负载均衡

2. demo2 为node现行cluster的简化版本，没有rr的负载均衡，但是基本完成整个流程
    * 注意onconncetion 这个函数，（弄明白它什么时候被触发，返回了什么）
        * **当有新连接来时触发**
        * 返回一个*handle*,注意和demo1的handle的区别  (还是网路建立的那4个阶段时刻谨记)

3. demo3 为ipc案例（这一块没有c++基础，只能懵逼的厉害，什么fd真的蛋疼）
    * ipc pipe 什么的蛋疼。这一块真的有点点不明白，在深入吧。。。（先放放）需要一些周边知识
    * 一点点理解，这个案例，的意思了
    * 这个案例是想告诉我，demo2中的 master  work.send,以及work中的process.send是 可能用的这种方式实现的
    * _channel 注意这个
    * 为send的底层 的一部分  process.binding('stream_wrap').WriteWrap;


## 相关源码知识

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
4. 饿了么一篇cluster的文章，有一点点参考意义[node cluster](https://zhuanlan.zhihu.com/p/27069865)
