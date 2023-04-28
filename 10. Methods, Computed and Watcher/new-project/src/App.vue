<template>
  <h1>{{ staticString }}</h1>
  <h1>{{ course.courseName }}</h1>
  <p>Course By {{course.mentor}}</p>
  <button @click="increment(2)"> + </button>
  <h3>{{ count }}</h3>
  <button @click="decrement(1)"> - </button>

</template>



<script setup>
  import { ref, reactive } from 'vue';
  let count = ref(0);
  const staticString = 'New Vue JS 3 Course- Method/Function Based Component';
  let course = reactive({
    courseName: 'Vue 3',
    mentor: 'Md Niaj Makhdum'
  })
  
  const increment = (amount) => {
    count.value += amount;
  }

  function decrement(amount){
    count.value -= amount;
  }



</script>

