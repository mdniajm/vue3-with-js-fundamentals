<template>
  <h1>{{ staticString }}</h1>
  <h1>{{ course.courseName }}</h1>
  <p @click="mentorName">Course By {{ mentorFullName }}</p>
  <button @click="increment(1)"> + </button>
  <h3>{{ count }} - {{ checkEvenOdd }}</h3>
  <button @click="decrement(1)"> - </button>

</template>



<script setup>
  import { ref, reactive, computed } from 'vue';
  let count = ref(0);
  const staticString = 'New Vue JS 3 Course- Method/Function Based Component';
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
    if(count.value % 2 == 0) return 'Odd';
    return 'Even';
  });
  




</script>

