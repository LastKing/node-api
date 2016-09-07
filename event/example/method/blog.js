/**
 * Created by Rain on 2016/9/7.
 */
var BlogInfo = require('../model/blogInfo');

exports.blog_save = function (newBlog) {
  var blogInfo = new BlogInfo();
  blogInfo.onSave(newBlog);
  blogInfo.emitEvent(newBlog);
};
