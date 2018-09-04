# 源码解读

## 对流模块的一些基本认识
node的`stream`不同于其他`fs`、`net`等可以直接使用的模块，它更多时候时候提供是一个基本的规范，你并不能直接使用它，
比如可写流，它只是定义了一个可写流的通用模版，他需要你自己处理数据到底写入什么地方，重写`_write`，`_destroy`。
当然它会帮你简化很多工作，比如它实现流的基本问题**背压**这一套流的基本过程，减少了让程序更加关注于逻辑。

比如我们常见`fs`模块中的`createWriteStream`,就是典型的可写流，返回一个可写流实例，也就是`stream`中的方法和事件。<br/>
再比如我们常见的`net.Socket`就是典型的双工流，同时具有可写流和可读流的事件与方法。

以上就是我经历3年工作和学习的总结，以前一直把`stream`当作一个独立的可直接运行的东西，在此确立知识的边界性。

## stream底层继承结构
stream流采用基本的 node继承模式

所有的流有一个基类`lib/letnal/streams/legacy.js`定义了基本的stream对象，继承了events，
Readable和Writable 都是继承该基类，并重写原型链上的方法，进而重新实现一个自己的流。

* Readable  继承自  stream
* Writable  继承自  stream
* Duplex    继承自  Readable,Writable
* transform 继承自  Duplex


## 关于实现自己的流，一点理解
1. readable 流，可读流 需要一个输入源，并且使用原型链上的`push`方法将数据推送出去
2. writable 流，可写流 同样需要一个输入源，`write`进行数据推动
3. 以上两种流，以`fs`模块为例，都是通过`crateXxxStream`创建文件`fd`（文件句柄），通过以上以上两个方法进行数据的推送

可读流 简化流程 （简化了`背压`）
```
    fs.CreateReadStream  --> fs.open(fd) -->  stream.read   -->  fs._read -->  stream.push  --> stream.emit('data',chunk) 等待用户on事件
```

可读流 简化流程
```
    fs.createWriteStream --> fs.open(fd) -->  等待用户调用 stream.write -->  fs._write  -->  fs.write（真正写入文件）
```

从以上流程可以看出 stream 帮我们简化了很多的工作，fs模块的实现更加简洁和清晰 （背压，以及状态管理，在这里并没有吸入，现在文笔有限）

参考1 为源码可写和可读很详尽，参考2更加全面duplex和transform看图说话，很通俗 哈哈

### 参考：
1. node.js stream学习 [链接](https://zhuanlan.zhihu.com/p/33488104?utm_source=qq&utm_medium=social)
2. 深入理解 Node.js Stream 内部机制 [链接](http://taobaofed.org/blog/2017/08/31/nodejs-stream/)
3. stream.js 源码及其依赖 [8.x](https://github.com/nodejs/node/blob/v8.x/lib/stream.js)
4. 最佳最简单继承fs.js [8.x](https://github.com/nodejs/node/blob/v8.x/lib/fs.js)