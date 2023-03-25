/* Conditionals 

Conditionals are used to perform different actions based on different conditions.

*/
/*

if 
else
else if
switch

if (condition) {
    // code block
}

*/

// let age = 55;
// if (age > 18 && age < 50) {
//     console.log("You are eligible to vote");
// } else if (age > 50 && age < 90) {
//     console.log("Please vote");
// } else {
//     console.log("You are not eligible to vote");
// }

let color = "blue";

switch (color){
    case "red":
        console.log("Color is red");
        break;
    case "blue":
        console.log("Color is blue");
        break;
    default:
        console.log("Color Is Unknown");
}