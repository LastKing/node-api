/**
 * node创建守护进程 （这个写法与linux完全挂钩，linux和window都不会生效)
 * 源自 饿了么 github知识总结出现的一个题目
 * https://cnodejs.org/topic/57adfadf476898b472247eac
 * Created by Rain on 2018/3/19
 */
const spawn = require('child_process').spawn;

let p = spawn('node', ['children.js'], {
  detached: true,
  stdio: 'ignore'
});
console.log(process.pid, p.pid);
