/* Date Methods 
Date in JavaScript is a built-in object that is used to work with dates and times.

*/

let date = new Date();
// console.log(date.toString()); // to get the current date and time
// console.log(date.toDateString()); // to get the current date
// console.log(date.toTimeString()); // to get the current time
// console.log(date.toLocaleString());     // to get the current date and time
// console.log(date.toLocaleDateString()); // to get the local current date
// console.log(date.toLocaleTimeString()); // to get the local current time

let y = date.getFullYear();
let m = date.getMonth();
let d = date.getDate();
let h = date.getHours();
let min = date.getMinutes();
let s = date.getSeconds();
console.log(y, m, d, h, min, s);
