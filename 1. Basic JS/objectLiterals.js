/* Object Literals:
Object literals are used to create single objects. These are the most popular and frequently used syntax.

*/

let car = {
    name : "BMW",
    model : "X5",
    weight : 2000,
    color : "black",
}

//console.log('car :>> ', car);

/*Access Properties. */
console.log(car.name, car.model, car.weight, car["color"]);

/* Get the properties of an Object -> Array */
let result = Object.getOwnPropertyNames(car);

let keys = Object.keys(car);

console.log(keys);

/* Properties value change */

car.name = "Mercedes";
car.model = "C200";
car.weight = 1500;
car.color = "black";

Object.defineProperty(car, "model", {value: 'F1'});

console.log('car :>> ', car);

let arr = [1,2,3,4,5];
 arr = 'Bangladesh'
for (const x of arr){
    console.log(x);
}
