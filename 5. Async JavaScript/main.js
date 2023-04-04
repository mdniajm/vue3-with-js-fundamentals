/*Get the button */

const btn = document.getElementById('button');

btn.addEventListener('click', loadData);

function loadData(){
    /*Create XHR object */
    const xhr = new XMLHttpRequest();
    
    /*Panel setup or open port */
    xhr.open('GET', 'data.txt', true);
    
    /*Runs when data load */
    xhr.onprogress = function(){
        console.log('READYSTATE', xhr.readyState);
    }


    xhr.onload = function(){
        console.log('READYSTATE', xhr.readyState);
        if(this.status === 200){
            console.log(this.responseText);
        }
    }
    // xhr.onreadystatechange = function(){
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    /*Send request */
    xhr.send();
}
