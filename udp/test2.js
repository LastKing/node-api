/**
 * Created by Rain on 2016/11/28.
 */
const dgram = require('dgram');
const client = dgram.createSocket('udp4');

const buf1 = Buffer.from('Some ');
const buf2 = Buffer.from('bytes');
client.send([buf1, buf2], 41234, 'localhost', (err) => {
  client.close();
});