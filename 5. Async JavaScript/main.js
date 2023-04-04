/*Get the button */

const btn = document.getElementById('button');

btn.addEventListener('click', loadData);

function loadData(){
    /*Create XHR object */
    const xhr = new XMLHttpRequest();

    
    /*Panel setup or open port */
    xhr.open('GET', 'post.json', true);
    
    /*Runs when data load */

    xhr.onload = function(){
        if(this.status === 200){
            const post = JSON.parse(this.responseText);
            console.log(post);
            const output = `
            <ul>
                <li>ID: ${post.id}</li>

            
            </ul>
            
            `;
            document.getElementById('post').innerHTML = output;
        }
    }
    
    xhr.send();
}
