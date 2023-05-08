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



<script setup>
  import { ref, reactive, computed, watch } from 'vue';

  let siteUrl = ref('https://www.google.com');

  let count = ref(0);



  let showBtn = ref(true);

  let bgGreen = ref('background-color: green');

  let toDos = ref(['Learn Vue 3', 'Learn React', 'Learn Node JS']);

  let textType = ref ('built in directives V-show');
  let htmlType = ref (`<li> this is a list item </li>`)
  const staticString = 'New Vue JS 3 Course- ';
  let course = reactive({
    courseName: 'Vue 3',
    mentorFirstName: 'Md Niaj',
    mentorLastName: 'Makhdum',
  })
  
  const increment = amount => count.value += amount;
  const decrement = amount => count.value -= amount;
  const mentorName = () => course.mentor = "Md. Niaj Makhdum";

  const mentorFullName = computed(() => {
    return course.mentorFirstName + ' ' + course.mentorLastName;
  });

  const checkEvenOdd = computed(() => {

    return count.value % 2 === 0 ? 'Even': 'Odd';
  });

  /* Watch event  */

  watch(count, (newValue, oldValue) => {
    console.log('New Value: ', newValue, 'Old Value: ', oldValue);
  });
  
 /* Class binding */

  let isRed = ref(true);
  let isGreen = ref(false);
  let isBlue = ref(true);

  let classBinding = computed(() => {
    return {
      red: isRed.value,
      green: isGreen.value,
      blue: isBlue.value,
    }
  });

  /* Style binding */

  let isBold = ref(true);
  let isItalic = ref(false);
  let isUnderline = ref(true);

  let styleBinding = computed(() => {
    return {
      fontWeight: isBold.value ? 'bold' : 'normal',
      fontStyle: isItalic.value ? 'italic' : 'normal',
      textDecoration: isUnderline.value ? 'underline' : 'none',
    }
  });

 



</script>

