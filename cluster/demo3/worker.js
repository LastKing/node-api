/**
 * Created by Rain on 2018/8/17
 */
const WriteWrap = process.binding('stream_wrap').WriteWrap;
const channel = process._channel;

channel.ref();
channel.onread = function (len, buf, handle) {
  if (buf) {
    console.log(buf.toString())
  }else{
    process._channel.close();
    console.log('channel closed');
  }
};

let message = { hello: 'master',  pid: process.pid };
let req = new WriteWrap();
let string = JSON.stringify(message) + '\n';
channel.writeUtf8String(req, string, null);
