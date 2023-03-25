/* Array Method 

Array is a special type of object. It is a collection of elements. 
Array is a data structure that stores a collection of data.
Array method is a function that is used to manipulate the array.


*/

let countries = ['Argentina', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Guyana', 'Paraguay', 'Peru'];
// length
// console.table(countries.length);

/* Entry/Insert
1. push - add at the end
2. unshift - add at the beginning
*/

// countries.push('Venezuela');

// console.log(countries);

// countries.unshift('Bolivia');

// console.log(countries);

/* Eject Entry
1. pop - remove from the end
2. shift - remove from the beginning

*/

// countries.pop();
// console.log(countries);

// countries.shift();
// console.log(countries);

// let countriesA = ['Argentina', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Guyana', 'Paraguay', 'Peru'];
// let countriesB = ['Bolivia', 'Venezuela', 'Uruguay', 'Suriname', 'Guyana', 'French Guiana', 'England'];

// console.log(countriesA, countriesB);

/* to join/concat */

// console.log(countriesA.concat(countriesB));

/* to reverse */

// console.log(countriesA.reverse());

/* to convert string */
// console.log(countriesA.toString(), countriesA.toLocaleString());

/* includes --- to check if an element is present in the array */

// console.log(countriesA.includes('Bangladesh'));


/*  
    map --- specific callback function run for each element => return a new array
    filter => filter out on a single condition Applied on each element => return a new array

    find => first matched element => return the element

    every ---- apply on each element if condition matched for each and every element => return boolean(true/false)

    findIndex---- return the index of the first matched element

    reduce --- reducer function for each array element => return a single value

    splice --- remove or replace element from an array => return a new array
    slice --- copy a portion of an array => return a new array
*/

// ES6 Formate
let countriesA = ['Argentina', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Guyana', 'Paraguay', 'Peru'];

//let result = countriesA.map(element => element + 'is a country');

//console.log(result);

// let result = countriesA.map(myFunction);

// function myFunction(element){
//     console.log(element);
// }

//console.log(countriesA.filter(element => element == 'Argentina'));

//console.log(countriesA.find(element => element == 'Argentina'));

let fifaPoints = [3, 4, 5, 6, 7, 8, 9, 10];

//console.log(fifaPoints.every(element => element > 5));

//console.log(countriesA.findIndex(element => element == 'Brazil'));

//console.log(fifaPoints.reduce((prev, curr) => prev + curr, 1));

//console.log(countriesA.splice(2, 2, 'Bangladesh', 'India'));

console.log(countriesA.splice(2, 4));
console.log(countriesA);









