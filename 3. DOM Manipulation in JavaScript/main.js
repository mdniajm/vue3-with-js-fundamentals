/*Event Listener */
const btn = document.querySelector('#addButton');

//console.log(btn);

// btn.addEventListener('click', (event) => {
//     console.log(
//         event.target.id, 
//         event.target.className, 
//         event.target.classList, 
//         event.type,
//         event.timeStamp,
//         event.clientX, event.clientY,
//         event.offsetX, event.offsetY
        
//         );
//     event.preventDefault();
// });

const title = document.querySelector('#t-title');

btn.addEventListener('mousemove', (event) => {
    title.textContent = 'Changed Title';
    title.style.color = 'red';
});

