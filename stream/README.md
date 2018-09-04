# node stream 学习
重点阅读官方文档，经常回头看官方文档能发现很多原来无法理解或者理解错误的东西，**多回头看看**。

## 1. 了解流的基本类型
流的基本类型:
* 可读流 Readable Stream   
* 可写流 Writable Stream   （此二者为根本）
* 双工流 Duplex   Stream   
* 交换流 Transform Stream

## 2. 可读流(Readable stream)
常见可写流： fs可读流，客户端http响应，服务器http请求<br/>

## 3.可写流
常见可写流：fs写入流，客户端http请求，服务端http响应 等

## 可写流与可读流需要注意的点罗列
1. 注意close事件，这个有点特殊
2. 可读流的读取结束时，end事件，可写流的结束事件是，finish事件
3. 可读流有2种模式：flowing和paused 两种模式 （注意哪些方法能够切换这两种状态）
4. 可写流有在write有时会返回false，意思达到阀值，需要等待写入完成，才能进行下一次读取和写入
5. 状态的转换，理解透彻可以是参考pipe的实现源代码（）
```
  基本状态转换和流的数据流程: （pipe 状态流动的基本流程）
                        --> false --> rs.pause --> ws.drain --> rs.resume --> rs.data
   rs.data--》ws.write
                        --> true  --> rs.data  --> ws.write --> rs.data
```

## 4. duplex 和 transform 未完待续，未能理解透彻这两个东西


**该文件内的 duplex.js 、 transform.js 和 myStream.js  文件中的 继承实现方式 还尚待确认。**


参考：
1. [node 官方文档8.x](https://nodejs.org/dist/latest-v8.x/docs/api/stream.html)
