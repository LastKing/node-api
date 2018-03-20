/**
 * es 规范下的两种视图
 * 数据存储 ArrayBuffer ,操作行为  dataView,TypeArray
 * node buffer 模块相对使用的都是typedArray，dataView感觉像v8里面带进来的
 * 具体没仔细研究过
 * Created by Rain on 2018/3/20
 */

//dataView
const buf = new ArrayBuffer(32);

const dataView = new DataView(buf);
console.log(dataView.getUint8(0));

//typedArray
const buffer = new ArrayBuffer(12);

const x1 = new Int32Array(buffer);
console.log(x1[0] = 1);
const x2 = new Uint8Array(buffer);
console.log(x2[0] = 2);

console.log(x1[0]); //2
