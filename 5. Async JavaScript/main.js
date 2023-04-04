/*Get the button */

const btn = document.getElementById('button');

btn.addEventListener('click', loadData);

function loadData(){
    /*Create XHR object */
    const xhr = new XMLHttpRequest();
    
    /*Panel setup or open port */
    xhr.open('GET', 'data.txt', true);
    
    /*Runs when data load */
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }
    }

    /*Send request */
    xhr.send();
}
