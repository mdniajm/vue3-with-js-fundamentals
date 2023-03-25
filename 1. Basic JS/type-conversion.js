/* Type Conversion: 
Type conversion is the process of converting a value from one type to another.

*/ 


/* Converting String to Number */



let pi = "3.1416";
//console.log(typeof(pi), typeof(Number(pi)), Number(""), Number(" "), Number("s")); // string

//console.log(typeof(pi), parseFloat(pi), parseInt(pi));

/* Converting Number to String */

let result = String(12345 + "23");
///console.log(result, 1234+ "23");
let x = 1.5656;
//console.log(x, x.toString(), x.toPrecision(2));


/* Converting Boolean to String */

console.log(false, String(false), false.toString());

/* converting Boolean to Number */
console.log(Number(false), Number(true));