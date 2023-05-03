<template>
  <h1 v-show="showBtn">{{ staticString }} <span v-text="textType"></span></h1>

  <button @click="showBtn= !showBtn">Show/Hide</button>
  <h1>{{ course.courseName }}</h1>
  <p @click="mentorName">Course By {{ mentorFullName }}</p>
  <button @click="increment(1)"> + </button>
  <h3>{{ count }} - {{ checkEvenOdd }}</h3>
  <button @click="decrement(1)"> - </button>

  <p v-html="htmlType"></p>
  <ul>
    <li v-for="toDo in toDos"> {{ toDo }} </li>
  </ul>

  <h1 :class="classBinding">Class Binding</h1>
  <p :class="classBinding"
     :style = "{bgGreen}" 
  
  >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni consectetur dolore voluptatum voluptatem atque consequatur quas est eum, doloribus molestias tempora ea expedita culpa tempore sapiente voluptas distinctio ab dolores!</p>
  <button @click="isRed = !isRed">Red</button>
  <button @click="isGreen = !isGreen">Green</button>

  <a :href=""> </a>

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

