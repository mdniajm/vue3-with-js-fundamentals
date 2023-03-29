/*
document.getElementById()
document.querySelector()

*/

// let val = document.getElementById('t-title');
// console.log(val);

// /*Get element item details */
// console.log(val.id);
// console.log(val.className);
// console.log(val.classList);

// /*Changing the styles */
// val.style.background = 'grey';
// val.style.textAlign = 'center';
// document.getElementById('t-title').style.border = '2px solid black';
// document.getElementById('t-title').style.color = 'white';
// document.getElementById('t-title').style.padding = '10px';
// document.getElementById('t-title').style.borderRadius = '5px';

// /*Changing the content */
// document.getElementById("t-title").textContent  = "Task Collection";
// document.getElementById("t-title").innerText  = "Task List";
// document.getElementById("t-title").innerHTML  = "<span style='color:pink'>Task Collection</span>";

// /*Query Selector */

let val = document.querySelector('#t-title');
val = document.querySelectorAll('li');


document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(4)').style.color = 'red';

console.log(val);