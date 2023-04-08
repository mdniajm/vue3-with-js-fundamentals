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

/* Post Todo's */
const postTodo = () => {
    dataFetch.post('https://jsonplaceholder.typicode.com/todos', {title: 'This is a new Todo', completed: false})
    .then(data => console.log(data))
    .catch(err => console.log(err));
} 

/* Put Todo's */
const putTodo = () => {
    dataFetch.put('https://jsonplaceholder.typicode.com/todos/1', {title: 'This is a new Todo', completed: false})
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

/* Delete Todo's */
const deleteTodo = () => {
    dataFetch.delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

/* Event Listeners */
document.getElementById('get-todos').addEventListener('click', getTodos);


