const moment = require('moment');

export function canEdit(startTime) {
  const now = new Date();
  const limit = 60000*5;
  // console.log('startTime = ', moment(startTime).format('dddd, MMMM Do YYYY, h:mm:ss a'));
  // console.log('now = ', moment(now).format('dddd, MMMM Do YYYY, h:mm:ss a'));
  // console.log('limit = ', moment(limit).format('dddd, MMMM Do YYYY, h:mm:ss a'));
  // console.log('now - startTime = ', now - startTime);
  // console.log('limit = ', limit);
  return ( now - startTime < limit)
};
