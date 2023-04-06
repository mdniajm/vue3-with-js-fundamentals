const dataFetch = new niajHTTP;
const listGroup = document.getElementById('list-group');

/* Get Todo's */
const getTodos = () => {
    dataFetch.get('https://jsonplaceholder.typicode.com/todos')
    .then((data) => {        
        console.log(data);
        let output= '';
        data.forEach(todo => {
            output += `
        
            <li class="list-group-item d-flex justify-content-between align-items-center text-light bg-info m-2 p-2">
                ${todo.title}
                <a href="#" class="delete-item secondary-content">
                  <i class="fa-solid fa-xmark"></i>
                </a>
              </li> 
              
            
            
            `;
            listGroup.innerHTML = output;
        })

    
    
    
    })


    .catch(err => console.log(err));
}

getTodos();
