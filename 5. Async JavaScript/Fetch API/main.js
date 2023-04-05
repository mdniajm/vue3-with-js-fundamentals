const btnText = document.getElementById('button-txt');
const btnJSON = document.getElementById('button-json');
const btnAPI = document.getElementById('button-api');

const post = document.getElementById('post');

btnText.addEventListener('click', () =>{
    fetch('data.txt')
    .then((res) => {
        console.log(res);
        return res.text();
    } ).then ((data) => {
        console.log(data);
        post.innerHTML = data;
    }).catch((err) => {
        console.log(err);
    })
});



