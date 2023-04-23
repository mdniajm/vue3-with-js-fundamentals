<template>
  <h1>{{ courseName }}</h1>
  <p>Course By {{mentor}}</p>

  <button @click="count++"> + </button>
  <h3>{{ count }}</h3>
  <button @click="count--"> - </button>

</template>



<script>
  import { ref } from 'vue';
  export default {
    setup(){
      let count = ref(0);
      const courseName = ref('Vue JS 3 MasterClass') ;
      const mentor = ref('Md Niaj Makdhum');

      return { count, courseName, mentor }

    }
  }
  
</script>

<style scoped>
  h1{
    color: red;
  }

</style>

<script>
//todo list
// 1. ref
// 2. reactive

// 3. computed
 
 import { ref } from 'vue';
  export default {
    setup(){
      let count = ref(0);
      const courseName = ref('Vue JS 3 MasterClass') ;
      const mentor = ref('Md Niaj Makdhum');

      return { count, courseName, mentor }

    }
  }


</script>




