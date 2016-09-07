/**
 * Created by toonew on 2016/9/7.
 */
//http://www.runoob.com/nodejs/nodejs-util.html
const util = require('util');
const EventEmitter = require('events');

function MyStream() {
  EventEmitter.call(this);
}

util.inherits(MyStream, EventEmitter);

MyStream.prototype.write = function (data) {
  this.emit('data', data);
};

var stream = new MyStream();

console.log(stream instanceof EventEmitter);
console.log(MyStream.super_ === EventEmitter);

stream.on('data', (data)=> {
  console.log(`Received data : ${data}`);
});

stream.write('It works!');

function Base() {
  this.name = 'base';
  this.base = 1991;
  this.sayHello = function () {
    console.log('Hello ' + this.name);
  };
}
Base.prototype.showName = function () {
  console.log(this.name);
};

function Sub() {
  this.name = 'sub';
}

util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
// objSub.sayHello();   //objSub.sayHello is not a function
console.log(objSub);
