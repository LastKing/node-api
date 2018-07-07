# proxy代理相关知识

http.agent 代理的基础类

test1中
superagent+proxy实现了代理请求<br/>
```
    supergent.get().proxy()
    --> superagent-proxy
    --> agent-base
```

agent-base git文档说是实现了`http.agent`，他就是重写了官方的，只是按照它自己的规则

对比官方代码[_http_agent_.js官方agent](https://github.com/nodejs/node/blob/master/lib/_http_agent.js)


