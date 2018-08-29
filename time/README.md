# timer底层实现原理
 
timer 定时器在任何实现http的服务器上都非常重要，且非常要求性能


参考1从数据层面和逻辑层面解读了timer的基本代码
1. node采用binding底层c++的`timer_wrap`模块，实现基础的计时功能
2. 实现了一个**object+双向链表**结构的时间处理工具，复用1中的对象，优化性能

当然还有其他方式，例如二叉树等。

参考2 列举了一些http中对timer的应用,例如
1. http response header 中的 Date 实现原理
2. http keep-alive的实现原理

参考3 属于比较高的c++层次。。看不太懂。。。的说



#### 参考:
1. timer详解--数据结构和逻辑层面的详解 [链接](https://zhuanlan.zhihu.com/p/30763470)
2. 源码笔记：Nodejs 如何高效的获取时间戳而不影响性能的？[链接](https://zhuanlan.zhihu.com/p/34889978)
3. c++级别的timer解释--**看不懂**。。。。[连接](https://zhuanlan.zhihu.com/p/26023420)

