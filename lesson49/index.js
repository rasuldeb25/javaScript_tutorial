//Date obejects = objects that contain values that reperesent dates and times
//                  these date objects can be changed and formatted
//                  year, month, day, hour, minute. second, millisecond

const date = new Date();
/*
const year  = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hour = date.getHours();
console.log(hour);
*/

date.setFullYear(2017);
date.setMonth(7);
date.setDate(16);

console.log(date);
