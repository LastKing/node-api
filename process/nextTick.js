/**
 * Created by Rain on 2017/3/24.
 */
console.log('start');
process.nextTick(() => {
  console.log('nextTick callback');
});
console.log('scheduled');





