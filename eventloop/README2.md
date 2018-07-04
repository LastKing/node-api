# event loop 拓展学习

1. 参考1中讲解 eventloop 在浏览器中的实现，以及标准规范，与node中的eventloop实现并不一样
2. 参考2中讲解 讲解了 node和浏览器的eventloop的差异表象
3. eventloop  并不是v8实现的，也不在v8之中，所以实现各异
4. 参考3中准确的指出了node和浏览器中eventloop的区别
5. 参考4中讲解了很多关于阮老师对异步事件的理解错误，感觉阮老师很多地方用例或者用具欠妥，
比如cpu任务分配一说，cpu中的任务是时间片轮转抢，抢占式工作，将这个例子扔到eventloop确实怪怪的，等（其他等知识更一步丰富后补充）






参考：
1. [浏览器中 event loop的相关规范](https://github.com/aooy/blog/issues/5)
2. [蚂蚁金服一篇关于前后端eventloop](https://zhuanlan.zhihu.com/p/33087629?iam=c4edee0375c1485ebf5c5be0532ba514&utm_source=qq&utm_medium=social)
3. [不要混淆nodejs和浏览器中的event loop](https://cnodejs.org/topic/5a9108d78d6e16e56bb80882)
4. [朴灵评注 -- JavaScript 运行机制详解：再谈Event Loop ](https://blog.csdn.net/lin_credible/article/details/40143961)
