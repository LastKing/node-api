/**
 * create by toonew on 2018/3/16
 */
const execFile = require('child_process').execFile;

execFile('node', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});