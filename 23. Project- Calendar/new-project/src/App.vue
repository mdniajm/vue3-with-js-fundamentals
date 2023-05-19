<template>
  <div id="app">
    <calendar :current-date="currentDate" :events="events"></calendar>
  </div>
</template>

<script>
import Calendar from "./components/Calendar.vue";

export default {
  name: "App",
  components: {
    Calendar,
  },
  data() {
    return {
      currentDate: new Date(),
      events: [],
    };
  },
  methods: {
    addEvent() {
      // Implement this method to add events to the array
    },
    removeEvent(event) {
      // Implement this method to remove events from the array
    },
  },
};
</script>
