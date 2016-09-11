/**
 * Created by toonew on 2016/9/11.
 */
const os = require('os');
console.log(os.EOL);//定义了操作系统的行尾符的常量。

// console.log(os.arch());

// console.log(os.constants);
// console.log(os.cpus());
console.log(os.endianness()); //返回 CPU 的字节序，可能的是 "BE" 或 "LE"。
// console.log(os.freemem());    //返回操作系统空闲内存量，单位是字节。
// console.log(os.homedir());    //home 空间
//
// console.log(os.hostname());   //用户名 （windows 有点怪）
// console.log(os.loadavg());    // xx不懂
// console.log(os.networkInterfaces()); //网卡信息
// console.log(os.platform());   //系统
// console.log(os.release());    //发型稳定版本
// console.log(os.tmpdir());     //系统临时目录
// console.log(os.totalmem());   //系统总内存量（字节）
console.log(os.type());       //返回操作系统名
console.log(os.uptime());     //返回操作系统运行的时间，以秒为单位。
// console.log(os.userInfo());

console.log(os.constants); 















