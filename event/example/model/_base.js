/**
 * Created by Rain on 2016/9/7.
 */
var events = require('events');
var util = require('util');

function _base() {
  this.emitter = new events.EventEmitter(this);
}

util.inherits(_base, events.EventEmitter);//继承

_base.prototype.onEvent = function (eventName, callback) {
  this.emitter.on(eventName, callback);
};

_base.prototype.emitEvent = function (eventName, args) {
  this.emitter.emit(eventName, args)
};

module.exports = _base;