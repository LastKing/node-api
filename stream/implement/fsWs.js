/**
 * 一个简化的文件读取流
 *
 * Created by Rain on 2018/9/5
 */
const fs = require('fs');
const util = require('util');
const {Writable} = require('stream');

function createWriteStream(path, options) {
  return new WriteStream(path, options);
}

function WriteStream(path, options) {
  if (!this instanceof WriteStream)
    return new WriteStream(path, options);

  Writable.call(this, options);

  options = util._extend({}, options);

  this.path = path;

  this.flag = options.flag === undefined ? 'w' : options.flag;
  this.mode = options.mode === undefined ? 0o666 : options.mode;

  this.pos = 0;
  this.bytesWritten = 0;

  this.fs = null;

  this.open();
}

util.inherits(WriteStream, Writable);


Writable.prototype.open = function () {
  let self = this;

  fs.open(this.path, this.flag, this.mode, function (err, fd) {
    if (err) {
      return console.error(err);
    }
    self.fd = fd;
    self.emit('open', fd)
  })
};

WriteStream.prototype._write = function (data, encoding, callback) {
  if (typeof this.fd !== "number") {
    return this.once('open', function () {
      this._write(data, encoding, callback);
    })
  }

  fs.write(this.fd, data, 0, data.length, this.pos, (err, bytes) => {
    if (err) {
      this.destroy();
      return callback(err);
    }

    this.bytesWritten += bytes;
    callback();
  });

  if (this.pos !== undefined)
    this.pos += data.length;
};

//可写文件流 通用模式 只重会调用_final, 并没调用_destroy，因为end只会触发finish事件，进而触发_final
WriteStream.prototype._final = function (callback) {
  fs.close(this.fd, function (err) {
    if (err) return console.error(err);
    console.log('关闭文件句柄');
    callback();
  })
};

module.exports = {createWriteStream};