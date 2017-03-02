var moment = require('moment');
//jan 1st 1970 00:00:00 am

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(1, 'year').subtract(3, 'months')
// console.log(date.format('MMM Do YYYY'));

// var date = moment();
// console.log(date.format('h:mm a'));

// new Date().getTime()
var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

// var created_at = 12356;
// var date = moment(created_at);
// console.log(date.format('h:mm a'));
