const moment = require('moment');

console.log('today', moment().format('YYYY-MM-DD'));
// console.log('today - us format', moment().format('MMM D, YYYY'));

console.log('+1 day', moment().add(1, 'day').format('YYYY-MM-DD'));
console.log('-1 day', moment().add(-1, 'day').format('YYYY-MM-DD'));
console.log('-1 day', moment().subtract(1, 'day').format('YYYY-MM-DD'));
console.log('-3 day', moment().subtract(3, 'day').format('YYYY-MM-DD'));

console.log('+1 week', moment().add(1, 'week').format('YYYY-MM-DD'));
console.log('-1 week', moment().subtract(1, 'week').format('YYYY-MM-DD'));

console.log('+1 month', moment().add(1, 'month').format('YYYY-MM-DD'));
console.log('-1 month', moment().subtract(1, 'month').format('YYYY-MM-DD'));

console.log('+1 year', moment().add(1, 'year').format('YYYY-MM-DD'));


var creation_date = new Date(); // UTC+0
var user_timezone = 9;

console.log('system', moment(creation_date).format('YYYY-MM-DD HH:mm:ss'));
console.log('timezone', moment(creation_date).add(user_timezone, 'hour').format('YYYY-MM-DD HH:mm:ss'));