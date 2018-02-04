# node stream 学习
重点阅读官方文档，官方文档真的自习看能发现很多原来无法发现的东西，多回头看看。

重点摘录：
## 1. 了解流的基本类型
node中流为2种基本的可写流和可读流，另外还有两种拓展duplex和transform，区分他们之间的基本语义上的区别

## 2. 可读流(Readable stream)
可读流创建方式：
* fs createReadStream （最常见的）
* Stream().Readable()  push 数据,end 结束 (大量内存浪费)
* Stream().Readable()  重写 _read 方法

上面提到fs的可读流是 文件模块实现的重写过的可读流，后两种方式是需要自己实现的可配置的[可读流](http://nodejs.cn/api/stream.html#stream_implementing_a_readable_stream)


## 3.可写流
* fs createWriteStream （最常见的）
* Stream().Writable()   重写方法 _write ，_writev，_final

## 可写流与可读流需要注意的点罗列
1. 注意close事件，这个有点特殊
2. 可读流的读取结束时，end事件，可写流的结束事件是，finish事件
3. 可读流有2种模式：flowing和paused 两种模式 （注意哪些方法能够切换这两种状态）
4. 可写流有在write有时会返回false，意思达到阀值，需要等待写入完成，才能进行下一次读取和写入
5. 状态的转换，理解透彻可以是参考pipe的实现源代码（node 4.x 版本都行，6.x 好像将pipe了，或者更加底层无法查阅）
```
  基本状态转换和流的数据流程:
                        --> false --> rs.pause --> ws.drain --> rs.resume --> rs.data
   rs.data--》ws.write
                        --> true  --> rs.data  --> ws.write --> rs.data
```

## 4. duplex 和 transform 未完待续，未能理解透彻这两个东西


**该文件内的 duplex.js 、 transform.js 和 myStream.js  文件中的 继承实现方式 还尚待确认。**


参考：
1. [node 官方文档8.9.3](http://nodejs.cn/api/stream.html)
