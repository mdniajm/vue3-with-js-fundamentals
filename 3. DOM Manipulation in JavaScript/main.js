/*Event Listener */
const btn = document.querySelector('#addButton');

//console.log(btn);

btn.addEventListener('click', (event) => {
    console.log(
        event.target.id, 
        event.target.className, 
        event.target.classList, 
        event.type);
    event.preventDefault();
});


