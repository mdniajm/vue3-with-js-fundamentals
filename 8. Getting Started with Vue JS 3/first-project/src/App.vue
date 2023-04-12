<template>
  <h1>{{ courseName }}</h1>
  <p>Course By {{mentor}}</p>

  <button @click="count++"> + </button>
  <h3>{{ count }}</h3>
  <button @click="count--"> - </button>

</template>



<script setup>
  import { ref } from 'vue';
  let count = ref(0);
  const courseName = ref('Vue JS 3 MasterClass') ;
  const mentor = ref('Md Niaj Makdhum');
</script>
