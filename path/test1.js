/**
 * Created by Rain on 2016/9/22.
 */
var path = require('path');


var result = path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile');
console.log(result);
//相当于：
// cd foo/bar
// cd /tmp/file/
// cd ..
//     cd a/../subfile
// pwd
