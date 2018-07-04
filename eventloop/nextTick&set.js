/**
 * 出处：
 * http://www.cnblogs.com/bingooo/p/6720540.html
 * Created by Rain on 2017/4/24.
 */
console.log('script start');  //1         1

const interval = setInterval(() => {
  console.log('setInterval')  //          6-12
}, 500);

setTimeout(() => {
  console.log('setTimeout 1'); //6        7
  Promise.resolve().then(() => {
    console.log('promise 3');   //8       8
  }).then(() => {
    console.log('promise 4');   //9       9
    process.nextTick(() => {
      console.log('nextTick 1'); //10     11
    });
  }).then(() => {
    setTimeout(() => {
      console.log('setTimeout 2'); //11   13
      Promise.resolve().then(() => {
        console.log('promise 5');  //12   14
      }).then(() => {
        console.log('promise 6');  //     15
        process.nextTick(() => {
          console.log('nextTick 2');//    16
        });
      }).then(() => {
        clearInterval(interval);
      });
    }, 0);
  });
}, 1000);

Promise.resolve().then(() => {
  console.log('promise 1');   //2       3
}).then(() => {
  console.log('promise 2');   //4       4
});

setImmediate(() => {
  console.log('setImmediate 1'); //5    5
});

console.log('script done');   //3       2