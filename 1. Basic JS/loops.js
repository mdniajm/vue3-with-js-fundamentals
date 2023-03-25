/* Loops in JS

Loops are used to repeat a block of code a certain number of times. There are three types of loops in JS:

1. for -- array
2. for...in -- object
3. for...of -- string/array
4. forEach -- array


*/

let fifaChampions = ["Brazil", "Germany", "Italy", "Argentina", "France", "Spain", "England", "Uruguay"];

// for (let index = 0; index < fifaChampions.length; index++ ){
//    const element = fifaChampions[index];
//     console.log(element);
// }
/* forEach */

// fifaChampions.forEach(element => {
//     console.log(element);
// });

// let person = {
//     FirstName: "Niaj",
//     LastName: "Makhdum",
//     Age: 24,   
// }

/*for...in*/
// for(let pro in person){
//     console.log(person[pro]);
// }

/* for of */

// for (let champion of fifaChampions){
//     console.log(champion);
// }

/* String Loops */
let str = "Vue Js 3 Master Class, with Javascript Fundamentals";

for (const char of str){
    console.log(char);
}
