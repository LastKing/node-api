/**
 * Created by Rain on 2016/7/21.
 */
var test = function () {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      resolve('test');
    }, 1000);
  });
};


test().then(function (result1) {
  console.log(result1);


  Promise.all(['a', 'b'], function (result) {
    console.log(result1);
  });
});