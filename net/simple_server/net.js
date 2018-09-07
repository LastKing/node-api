/**
 * create by toonew on 2018/9/8
 */
const util = require('util');
const net = require('net');
const EventEmitter = require('events');

function createServer(options, connectionListener) {
  return new Server(options, connectionListener);
}

function Server(options, connectionListener) {
  if (!this instanceof Server) return new Server(options, connectionListener);

  EventEmitter.call(this);

  if (typeof  options === 'function') {
    connectionListener = options;
    options = {};
    this.on('connection', connectionListener);
  }

  this._connections = 0;//记录当前连接数

}

util.inherits(Server, EventEmitter);

Server.prototype.listen = function (...args) {
  let normalized = normalizeArgs(args);
  let options = normalized[0];
  let cb = normalized[1];

  if (cb) {
    this.once('listening', cb);
  }


  if (typeof options.port === 'number' || typeof options.host === 'string') {
    let backlog = 512;
    listenInCluster(this, null, options.port | 0, 4, backlog, undefined, options.exclusive);
  }

};

Server.prototype._listen2 = setupListenHandle;

function normalizeArgs(args) {
  let options = {};
  options.port = args[0];
  if (args.length > 1 && typeof args[1] === 'string') options.host = args[1];

  let arr;
  if (typeof args[args.length - 1] === 'function')
    arr = [options, args[args.length - 1]];
  else
    arr = [options, null];
  return arr;
}

function listenInCluster(server, address, port, addressType, backlog, fd, exclusive) {
  exclusive = !!exclusive;

  server._listen2(address, port, addressType, backlog, fd);
}

function setupListenHandle(address, port, addressType, backlog, fd) {
  let rval = null;

  if (!this._handle) {
    if (!address && typeof fd !== 'number') {
      rval = net._createServerHandle('::', port, 6, fd);

      if (typeof rval === 'number') {
        rval = null;
        address = '0.0.0.0';
        addressType = 4;
      } else {
        address = '::';
        addressType = 6;
      }
    }

    if (rval === null)
      rval = net._createServerHandle(address, port, addressType, fd);

    this._handle = rval;
    this._handle.listen(backlog || 511);
  }

  this._handle.onconnection = onconnection;
  this._handle.owner = this;

  this.emit('listening')
}

function onconnection(err, clientHandle) {
  let handle = this;
  let self = handle.owner;

  let socket = new net.Socket({
    handle: clientHandle,
  });
  socket.readable = socket.writable = true;

  self._connections++;

  self.emit('connection', socket);
}


module.exports = {
  Server,
  createServer
};