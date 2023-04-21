import { 'App' } from 'vue'
<template>
  <div class="age-calculator">
    <h1>Age Calculator</h1>
    <form @submit.prevent="calculateAge">
      <label>
        Birthdate:
        <input type="date" v-model="birthdate" />
      </label>
      <button type="submit">Calculate Age</button>
    </form>
    <div v-if="age">
      <p>Your age is {{ age.years }} years, {{ age.months }} months, {{ age.days }} days, {{ age.hours }} hours, {{ age.minutes }} minutes, and {{ age.seconds }} seconds old.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      birthdate: '',
      age: null,
    };
  },
  methods: {
    calculateAge() {
      const birthDate = new Date(this.birthdate);
      const today = new Date();
      let ageYears = today.getFullYear() - birthDate.getFullYear();
      let ageMonths = today.getMonth() - birthDate.getMonth();
      let ageDays = today.getDate() - birthDate.getDate();
      let ageHours = today.getHours() - birthDate.getHours();
      let ageMinutes = today.getMinutes() - birthDate.getMinutes();
      let ageSeconds = today.getSeconds() - birthDate.getSeconds();

      if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
        ageDays = (today.getDate() + this.daysInMonth(today.getMonth(), today.getFullYear())) - birthDate.getDate();
      }

      if (ageDays < 0) {
        ageMonths--;
        ageDays += this.daysInMonth(today.getMonth() - 1, today.getFullYear());
      }

      if (ageHours < 0) {
        ageDays--;
        ageHours += 24;
      }

      if (ageMinutes < 0) {
        ageHours--;
        ageMinutes += 60;
      }

      if (ageSeconds < 0) {
        ageMinutes--;
        ageSeconds += 60;
      }

      this.age = {
        years: ageYears,
        months: ageMonths,
        days: ageDays,
        hours: ageHours,
        minutes: ageMinutes,
        seconds: ageSeconds,
      };
    },
    daysInMonth(month, year) {
      return new Date(year, month + 1, 0).getDate();
    },
  },
};
</script>

<style>
.age-calculator {
  font-family: Arial, sans-serif;
  text-align: center;
}
</style>
