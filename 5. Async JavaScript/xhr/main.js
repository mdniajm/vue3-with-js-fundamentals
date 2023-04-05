/*Get the button */

const btn = document.getElementById('button');

btn.addEventListener('click', loadData);

function loadData(){
    /*Create XHR object */
    const xhr = new XMLHttpRequest();

    
    /*Panel setup or open port */
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    
    /*Runs when data load */

    xhr.onload = function(){
        if(this.status === 200){
            const post = JSON.parse(this.responseText);
            console.log(post);
            let output = '';
            post.forEach(function(post){
                output += `
                <ul>
                    <li>${post.title}</li>
                    <li>${post.body}</li>
                </ul>
                `;
            });
            document.getElementById('post').innerHTML = output;
    }
}
    
    xhr.send();
}

