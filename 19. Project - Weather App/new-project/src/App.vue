<template>
  <div>
    <h1>Weather App</h1>
    <form @submit.prevent="getWeather">
      <label for="city">Enter City:</label>
      <input type="text" id="city" v-model="city" required>
      <button type="submit">Get Weather</button>
    </form>
    <div v-if="weather">
      <h2>{{ city }}</h2>
      <p>Current temperature: {{ weather.main.temp }} &#8451;</p>
      <p>Weather description: {{ weather.weather[0].description }}</p>
      <p>Wind speed: {{ weather.wind.speed }} m/s</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      city: '',
      weather: null,
    }
  },
  methods: {
    getWeather() {
      const API_KEY = 'your_openweathermap_api_key_here';
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${API_KEY}`;
      
      axios.get(API_URL)
        .then(response => {
          this.weather = response.data;
          this.city = '';
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>