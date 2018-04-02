# buffer 学习

buffer是典型的 c++ 和 js组合实现的，c++负责申请内存，在js层负责分配内存的策略（slab），c++负责申请生成slab块，node是在slab上再分配

buffer基本组成结构为  `数据存储` + `操作视图`

buffer在node中实例是Uint8Array的实例，和es2015规范中有细微差别，详情参看官方文档。


```
  数据存储          视图
             -- DataView
            /
ArrayBuffer                  -- Uint8Array
            \               /
             -- TypeArray  --   Uint16Array
                            \
                             -- Uint32Array 等。。
```

参考：
1. [阮一峰 ArrayBuffer](http://es6.ruanyifeng.com/#docs/arraybuffer)
2. 官方文档8.9.3
3. 建议阅读深入浅出node.js中的buffer部分