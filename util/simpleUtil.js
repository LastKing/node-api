/**
 * http://yijiebuyi.com/blog/ea4b2a30f73596a08ce85211626b68e5.html
 * Created by Rain on 2017/3/14.
 */
inherits = function (ctor, superCtor) {
  if (ctor === undefined || ctor === null)
    throw new TypeError('The constructor to `inherits` must not be ' +
      'null or undefined.');

  if (superCtor === undefined || superCtor === null)
    throw new TypeError('The super constructor to `inherits` must not ' +
      'be null or undefined.');

  if (superCtor.prototype === undefined)
    throw new TypeError('The super constructor to `inherits` must ' +
      'have a prototype.');

  ctor.super_ = superCtor;

  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  }); //4.x 以及之前的版本是 用的create
  // Object.setPrototypeOf(ctor.prototype, superCtor.prototype);//6.x之后开始使用setPrototypeOf();
};

function Base() {
  this.name = 'base';
  this.base = 1991;
  this.sayHello = function () {
    console.log('Hello ' + this.name);
  }
}
Base.prototype.showName = function () {
  console.log(this.name);
};

function Sub() {
  this.name = 'sub';
}

inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
// objSub.sayHello();   //objSub.sayHello is not a function
console.log(objSub);
