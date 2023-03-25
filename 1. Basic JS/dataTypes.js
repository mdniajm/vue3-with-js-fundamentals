/*
Data Types are the types of data that we use in our program. There are two types of data types in JS:

Primitive Types
1. String -> "Any Text"
2. Number -> 35, 35.5
3. Boolean -> true, false
4. Null -> null
5. Undefined -> undefined
6. Symbol -> Symbol()

Non-Primitive Types
1. Object -> {key: 'value'}
2. Array -> [1,2,3,4,5]
3. Function -> function(){}

*/ 

let age = 24; // Number
let name = "Niaj Makhdum"; // String
let isStudent = true; // Boolean
let isNull = null; // Null
let isUndefined = undefined; // Undefined
let symbol = Symbol(); // Symbol
 console.log(age, name, isStudent, isNull, isUndefined, symbol);

 //non-primitive types

 let person = { 
    FirstName: "Md Niaj",
    LastName: "Makhdum",
    Age: 24,
    Hobbies: ["Coding", "Gaming", "Reading"]
 } // Object

 console.log(person.Hobbies);

let countries = ["Bangladesh", "India", "Pakistan", "Srilanka", "Nepal"]; // Array

console.log(countries);

function FullName(fName = "Niaj", Lname = "Makhdum") {
    return fName + " " + Lname;
} // Function

let result = FullName( person.FirstName, person.LastName );
console.log(result);

// object with function
let person2 = {
    FirstName: "Md Niaj",
    LastName: "Makhdum",
    fullName (){
        return this.FirstName + " " + this.LastName;
    }
}

console.log(person2.fullName());