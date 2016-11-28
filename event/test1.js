/**
 * Created by Rain on 2016/11/28.
 */
const EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event', function () {
  console.log('some_event 事件触发');
});

setTimeout(function () {
  event.emit('some_event');
}, 1000);
