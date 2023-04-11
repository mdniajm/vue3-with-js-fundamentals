<template>
  <h1>{{ courseName }}</h1>
  <p>Course By {{mentor}}</p>

  <button @click="count++"> + </button>
  <h3>{{ count }}</h3>
  <button @click="count--"> - </button>

</template>


// options api
<script>
export default{
  data(){
    return{
      courseName: 'Vue JS 3 MasterClass',
      mentor: 'Md Niaj Makdhum',
      count: 0
    }
  }
}
</script>

// composition api
<script>
import { ref } from 'vue'

export default{
  setup(){
    const courseName = ref('Vue JS 3 MasterClass')
    const mentor = ref('Md Niaj Makdhum')
    const count = ref(0)

    return{
      courseName,
      mentor,
      count
    }
  }
}

</script>

/* todo list using composition api */

Path: first-project\src\App.vue

<template>
  <div>
    <h1>Todo List</h1>
    <input type="text" v-model="todo" placeholder="Enter Todo">
    <button @click="addTodo">Add Todo</button>

    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
  </div>

</template>

<script>  
import { ref } from 'vue'

export default{
  setup(){
    const todo = ref('')
    const todos = ref([])

    const addTodo = () => {
      todos.value.push(todo.value)
      todo.value = ''
    }

    const removeTodo = (index) => {
      todos.value.splice(index, 1)
    }

    return{
      todo,
      todos,
      addTodo,
      removeTodo
    }
  }
}

</script>