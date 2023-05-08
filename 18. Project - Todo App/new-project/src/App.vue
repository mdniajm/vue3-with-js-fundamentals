<template>
  <div class="todo-app">
    <h1>My Todo List</h1>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="newTodoText" placeholder="Add new todo item" />
      <button>Add</button>
    </form>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.completed" />
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
        <button @click="deleteTodo(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoText: '',
      todos: [
        { text: 'Learn Vue.js', completed: false },
        { text: 'Build a simple app', completed: true },
        { text: 'Deploy the app', completed: false }
      ]
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoText) {
        this.todos.push({
          text: this.newTodoText,
          completed: false
        });
        this.newTodoText = '';
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
  }
}
</script>
<style>
  .red {
    color: red;
    background-color: red;
  }
  .green {
    color: green;
    background-color: green;
  }
  .blue {
    color: blue;
    background-color: blue;
  }

</style>



<

