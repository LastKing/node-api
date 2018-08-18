/**
 * http://code.replays.net/201612/23849.html
 * Created by Rain on 2017/04/25
 */
const binding = process.binding('fs'); //binding是C++与nodejs的接口，
const FSReqWrap = binding.FSReqWrap;   //FSReqWrap是C++实现的一个方法。具体完成什么功能，不知

//校验 mode  数字 （也就是权限）
function modeNum(m, def) {
  //验证mode所用的，把m转换成数字
  // 如果是数字，则直接返回，
  // 如果是字符串，则转换成8进制数字，
  // 如果第二个参数存在，则把第二个参数转换为数字，
  // 如果不存在，则返回undefined
  if (util.isNumber(m))
    return m;
  if (util.isString(m))
    return parseInt(m, 8);
  if (def) return modeNum(def);
  return undefined;
}

function makeCallback(cb) {
  if (util.isNullOrUndefined(cb)) { //如果传入的值为null或者undefined，则返回异常处理函数
    return rethrow();      //rethrow是一个异常处理函数，这里不涉及
  }
  if (!util.isFunction(cb)) {    //如果传入的值，不是function类型，则抛出一个类型错误
    throw new TypeError('callback must be a function');
  }
  //否则，形成一个闭包，用于改变回调函数的内部指向
  // 当该诶不上下文时，则内部的this指向顶级作用域
  return function () {
    return cb.apply(null, arguments);
  };
}

function nullCheck(path, callback) {    //判断path是否合法，就是不能再path中，包含空格符。
  if (('' + path).indexOf('\u0000') !== -1) {
    var er = new Error('Path must be a string without null bytes.');
    if (!callback) throw er;      //如果不合法，则传入err，并执行回调函数
    process.nextTick(function () {
      callback(er);
    });
    return false;
  }
  return true;
}

fs.open = function (path, flags, mode, callback) {
  //使用传入的最后一个参数，生成一个有闭包的函数，作为回调函数
  callback = makeCallback(arguments[arguments.length - 1]);
  mode = modeNum(mode, 438 /*=0666*/);

  //设置mode为八进制的数值，如果没有设置，则默认设置为438，八进制=0666
  // 如果path路径不合法，则直接执行回调，并把错误对象传入回调函数，
  // 结束
  if (!nullCheck(path, callback)) return;

  //否则，实例化一个FSReqWrap对象，并给该对象绑定一个oncomplete方法。
  var req = new FSReqWrap();
  req.oncomplete = callback;
  //使用C++公开的接口，执行打开文件的操作。
  binding.open(pathModule._makeLong(path), stringToFlags(flags), mode, req);
};