<template>
  <h1>{{ staticString }}</h1>
  <h1>{{ course.courseName }}</h1>
  <p>Course By {{course.mentor}}</p>
  Insert Initial Value: <input type="number" v-model="count">
  <br/>
  <br/>
  <button @click="count++"> + </button>
  <h3>{{ count }}</h3>
  <button @click="count--"> - </button>

</template>



<script setup>
  import { ref, reactive } from 'vue';
  let count = ref(0);
  count.value = 10;
  const staticString = 'New Vue JS 3 Course';
  let course = reactive({
    courseName: 'Vue 3',
    mentor: 'Md Niaj Makhdum'
  })
  
</script>

