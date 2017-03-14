/**
 * https://segmentfault.com/a/1190000002446928
 * 实现自己的流
 * Created by Rain on 2016/9/23.
 */
var stream = require('stream');
var util = require('util');
var fs = require('fs');

function ReadStream() {
  stream.Readable.call(this);
  this._max = 5;
  this._index = 0;
}
util.inherits(ReadStream, stream.Readable);

ReadStream.prototype._read = function () {
  var i = this._index++;
  if (i > this._max) {
    this.push('beautiful');
    this.push(null);
  } else {
    var str = "" + i;
    var buf = new Buffer(str, 'utf8');
    this.push(buf);
  }
};

function WriteStream() {
  stream.Writable.call(this);
  this._storage = new Buffer('');
}
util.inherits(WriteStream, stream.Writable);

WriteStream.prototype._write = function (chunk, encoding, callback) {
  this._storage = Buffer.concat([this._storage, chunk]);
  callback();
};

var reader = new ReadStream();
var writer = new WriteStream();

reader.on('data', function (data) {
  writer.write(data);
});

reader.on('end', function () {
  writer.end();
});

writer.on('finish', function () {
  fs.writeFileSync('./outpu.txt', this._storage);
});

