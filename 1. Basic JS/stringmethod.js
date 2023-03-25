/*string and string methods:  
String is a primitive data type in Javascript. It is used to represent textual data.
String Method is a function that is used to manipulate the string.

*/
let courseName = "Vue Js 3 Master Class, with Javascript Fundamentals";

//length
//console.log(courseName.length);

//uppercase and lowercase

//console.log(courseName.toLocaleLowerCase(), courseName.toUpperCase());

// Addition + plus

//console.log(courseName + " by Md Niaj Makhdum");

// slice, substring, substr -- small parts of string

console.log(courseName.slice(4, 8));
console.log(courseName.substring(4, 8));
console.log(courseName.substr(4, 8));

//replace, replaceAll

console.log(courseName.replace("Vue", "React"));

console.log(courseName.replaceAll("Javascript", "Js"));

//split

let address = "Baherchar, Babuganj, Barishal 8210";

console.log(address.split(",")[2]);