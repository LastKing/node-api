/**
 * Created by Rain on 2016/9/7.
 */
var _base = require('./_base');
var utils = require('util');

function BlogInfo() {
  this.base = new _base();
}

utils.inherits(BlogInfo, _base);

BlogInfo.prototype.onSave = function (blog) {
  this.base.onEvent('saveStart', function (blog) {
    console.log('saveStart', blog);
  });
  this.base.onEvent('blogCount', function (blog) {
    console.log('blogCount', blog);
  });

  this.base.onEvent('userInfoCount', function (blog) {
    console.log('count', blog);
  });

  this.base.onEvent('saveEnd', function (blog) {
    console.log('saveEnd', blog);
  });
};


BlogInfo.prototype.emitEvent = function (blog) {
  this.base.emitEvent('saveStart', blog);

  this.base.emitEvent('blogCount', blog);

  this.base.emitEvent('userInfoCount', blog);

  this.base.emitEvent('saveEnd', blog);
};

module.exports = BlogInfo;