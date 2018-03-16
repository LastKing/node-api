/**
 * create by toonew on 2018/3/16
 */
console.log('child pid: ' + process.pid);

process.on('message', function(msg){
  console.log('child get message: ' + JSON.stringify(msg));
});

process.send({key: 'child value'});