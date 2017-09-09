// Jan 1st 1970 00:00:00 am

var moment = require('moment');

// var date = moment();
// date.add(1, 'year').subtract(11, 'month');
// console.log(date.format('MMM Do, YYYY'));

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

var createdAt = 3287589;
var time = moment(createdAt);
console.log(time.format('h:mm a'));
