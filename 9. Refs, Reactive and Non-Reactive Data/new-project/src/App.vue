<template>
  <h1>{{ course.courseName }}</h1>
  <p>Course By {{course.mentor}}</p>

  <button @click="count++"> + </button>
  <h3>{{ count }}</h3>
  <button @click="count--"> - </button>

</template>



<script setup>
  import { ref, reactive } from 'vue';
  let count = ref(0);
  let course = reactive({
    courseName: 'Vue 3',
    mentor: 'Md Niaj Makhdum'
  })
  
</script>

