<template>
  <h1>{{ courseName }}</h1>
  <p>Course By {{mentor}}</p>

  <button @click="count++"> + </button>
  <h3>{{ count }}</h3>
  <button @click="count--"> - </button>

</template>


// options api
<script>
export default{
  data(){
    return{
      courseName: 'Vue JS 3 MasterClass',
      mentor: 'Md Niaj Makdhum',
      count: 0
    }
  }
}
</script>

// composition api
<script>
import { ref } from 'vue'


</script>