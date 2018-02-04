/**
 * Created by Rain on 2017/4/26.
 */
const addon = require('./build/Release/addon');

addon((msg) => {
  console.log(msg);
});
