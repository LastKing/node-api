#http学习

>node的http部分业务逻辑非常之多，而且这还是没有窥探到底层libuv代码的情况下，我们简单梳理一下上面出现过的实例：
1. createServer时： 创建一个http Server实例server，继承自net.Server。
2. listen调用时： 创建一个TCP的实例tcp ，让 server._handle = tcp; tcp.owner = server; tcp监听指定端口。同时绑定一个 onread事件。
3. 连接到来时：先触发 tcp.onconnection()传递回来一个参数 clientTCP，在这里会创建一个 Scoket的实例reqSocket，reqSocket._hanlde = clientTCP; clientTCP.owner = reqSocket;
4. 步骤3完成时会触发 reqSocket 的connection方法，在这个方法里面会涉及到 HTTPParse的实例httpParser，这一步是为socket绑定事件和parser的定义。
5. 请求数据来到，触发clientTCP的onread事件，onread事件会触发socket的socketOnData事件，而在这个事件里面，会触发 parserOnHeadersComplete 。
6. 执行parserOnHeadersComplete，会创建一个 IncomingMessage 的实例，将parser header的一些结构赋予它， 这个实例就是用户会接触到的 req，parserOnHeadersComplete处理完成之后会触发parserOnIncoming。
7. parserOnIncoming会创建一个 ServerResponse 实例 res，也就是用户能够接触到的res，然后把req和res作为参数触发 server的request事件（来自用户）。

####参考：
1. [nodeJs源码-http server](http://liyangready.github.io/2015/09/16/nodejs%E6%BA%90%E7%A0%81-http-server/)