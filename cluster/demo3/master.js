/**
 * Created by Rain on 2018/8/17
 */
const WriteWrap = process.binding('stream_wrap').WriteWrap;
const cp = require('child_process');

const worker = cp.fork('./worker.js');
const channel = worker._channel;

channel.onread = function (len, buf, handle) {
  if (buf) {
    console.log(buf.toString());
    channel.close()
  } else {
    channel.close();
    console.log('channel closed');
  }
};

let message = {hello: 'worker', pid: process.pid};
let string = JSON.stringify(message) + '\n';
let req = new WriteWrap();
channel.writeUtf8String(req, string, null);
