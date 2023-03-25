/*ES6 --- Functions & Arrow Functions
Function in ES6 is a block of code that can be reused. It can be called multiple times. It is used to perform a specific task.

*/

// let x = 10;
// let y = 20;
// console.log(x * y);

// function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// }

// console.log(toCelsius(104));

/*ES6 --- Arrow Functions*/
let toCelsius = (fahrenheit) => {
    return (5/9) * (fahrenheit-32);
}

console.log(toCelsius(104));
