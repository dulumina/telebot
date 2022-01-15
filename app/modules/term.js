// const { stdout, stderr } = require("process");
// const term = (msg) => {
//   const { exec } = require("child_process");
//   let command = msg.text.split('"')[1];
//   // return command;
//   exec(command, (error, stdout, stderr) => {
//     if (error) {
//       // console.log('Error in removing files');
//       return "error";
//     }
//     if (stderr) {
//       // console.log('an error with file system');
//       return "errors";
//     }
//     // console.log(stdout);
//     return "okee"
//   });
// }

function term(msg) {
  const exec = require('child_process').exec;
  let cmd = msg.text.split('"')[1];
  return new Promise((resolve, reject) => {
   exec(cmd, (error, stdout, stderr) => {
    if (error) {
     console.warn(error);
    }
    resolve(stdout? stdout : stderr);
   });
  });
 }

module.exports = term;