const moment = require('moment');

// var startTime, endTime;
//
// function start() {
//   startTime = new Date();
// };
//
// function end() {
//   endTime = new Date();
//   var timeDiff = endTime - startTime; //in ms
//   // strip the ms
//   timeDiff /= 1000;
//
//   // get seconds
//   var seconds = Math.round(timeDiff);
//   console.log(seconds + " seconds");
// }
// <button onclick="start()">Start</button>
//
// <button onclick="end()">End</button>

export function canEdit(startTime) {
  const now = new Date();
  const limit = 60000*5;
  console.log('limit = ', moment(now).format());
  console.log('limit = ', moment(limit).format());
  console.log('now - startTime = ', now - startTime);
  console.log('limit = ', limit);
  return ( now - startTime < limit)
  // return true
};