# node net 模块学习

## 1.tcp 服务器创建方法
`net.createServer` 就这一个方法,实质是`new Server(options, connectionListener);`

当`connection`事件被触发时
--》当新的连接创建时触发，参数是请求的socket
及`createServer(socket)`这里会是一个socket

## 2.tcp 连接的创建方法
* net.connect(options[, connectListener])
* net.connect(path[, connectListener])
* net.connect(port[, host][, connectListener])
* net.createConnection(options[, connectListener])
* net.createConnection(path[, connectListener])
* net.createConnection(port[, host][, connectListener])

这种create 都是对上面 connect的别名导出，我居然还以为createConnect是一个服务器！！（愚蠢）


## 参考:
1. [7.x文档](https://nodejs.org/dist/latest-v7.x/docs/api/net.html)
2. [net模块入门](http://www.cnblogs.com/chyingp/p/6072338.html) 对各个事件有基本的中文翻译
