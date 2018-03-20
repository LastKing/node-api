# buffer 学习

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