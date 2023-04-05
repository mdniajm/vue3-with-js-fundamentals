const btnText = document.getElementById('button-txt');
const btnJSON = document.getElementById('button-json');
const btnAPI = document.getElementById('button-api');

btnText.addEventListener('click', () =>{
    fetch('data.txt')
    .then((res) => {
        return res.text();
    } ).then ((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
})

