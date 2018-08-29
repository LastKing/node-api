/**
 * binding(c++代码) 方式实现，
 * 这样写有严重的性能问题，每次都生成Timer对象
 * Created by Rain on 2018/7/9
 */
const Timer = process.binding('timer_wrap').Timer;

const kOnTimeout = Timer.kOnTimeout | 0;

function setTimeout(fn, ms) {
  let timer = new Timer();   // 创建一个 Timer 对象
  timer.start(ms, 0);        // 设置触发时间
  timer[kOnTimeout] = fn;    // 设置回调函数
  return timer;              // 返回定时器
}

// 试一试
setTimeout(() => console.log('timeout!'), 1000);
