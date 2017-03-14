/**
 * https://github.com/ElemeFE/node-interview/blob/master/sections/js-basic.md#%E7%B1%BB%E5%9E%8B%E5%88%A4%E6%96%AD
 * 内存溢出问题
 * Created by toonew on 2017/3/9.
 */
// let arr = [];
// while(true)
//   arr.push(1);//溢出

// let arr = [];
// while(true)
//   arr.push();    //不溢出


// let arr = [];
// while(true)
//   arr.push(new Buffer(1000));//也会移除，只是检测到溢出的时间较长
