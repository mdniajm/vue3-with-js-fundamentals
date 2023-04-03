// /*Local Storage */

// let name = 'Md Niaj Makhdum';
// localStorage.setItem('name', name); // setItem(key, value)

// let result;
// result = localStorage.getItem('name'); // getItem(key)
// console.log(result);

// // Remove Item
// localStorage.removeItem('name'); // removeItem(key)

// /* Session Storage */

// sessionStorage.setItem('name', name); // setItem(key, value)
// sessionStorage.getItem('name'); // getItem(key)
// console.log('name');

let auth = {
    name: 'admin',
    email: 'admin@gmai.com',
    userCode: '123456',
    token: '1234567890'
}

localStorage.setItem('secret', JSON.stringify(auth));

let result;

result = JSON.parse(localStorage.getItem('secret'));

console.log(result.name);
