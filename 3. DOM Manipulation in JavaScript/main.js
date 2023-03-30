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

// let val = document.querySelector('#t-title');
// val = document.querySelectorAll('li');


// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(4)').style.color = 'red';

// console.log(val);


// const listItems = document.getElementsByClassName('list-group-item');

// console.log(listItems);

// listItems[0].style.color = 'red';
// listItems[1].style.color = 'blue';

// const listItems = document.querySelector('ul').getElementsByClassName('list-group-item');

// console.log(listItems);

// const lists = document.querySelectorAll('.list-group-item');

// // lists[0].style.color = 'red';

// lists.forEach((item, index) => {
//    console.log(item.className, item, index);
//     item.style.color = 'white';
//     item.style.backgroundColor = 'green';
//     item.style.marginTop = '10px';
//     item.style.borderRadius = '5px';
//     item.style.padding = '20px';
//     item.textContent = `${index + 1} Niaj`;
    
// });

let result;
const list = document.querySelector('ul.list-group');

// const listItems = document.querySelector('li.list-group-item:first-child');

result = list.childNodes; 

/*
1 - element
2 - attribute (dep)
3 - text node
8 - comment
9 - document itself
10 - Doctype

*/
console.log(result);