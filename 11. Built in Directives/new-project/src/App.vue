<template>
  <h1 v-show="showBtn">{{ staticString }} <span v-text="textType"></span></h1>

  <button @click="showBtn= !showBtn">Show/Hide</button>
  <h1>{{ course.courseName }}</h1>
  <p @click="mentorName">Course By {{ mentorFullName }}</p>
  <button @click="increment(1)"> + </button>
  <h3>{{ count }} - {{ checkEvenOdd }}</h3>
  <button @click="decrement(1)"> - </button>

  <p v-html="htmlType"></p>

</template>



<script setup>
  import { ref, reactive, computed, watch } from 'vue';
  let count = ref(0);

  let showBtn = ref(true);

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
  




</script>

