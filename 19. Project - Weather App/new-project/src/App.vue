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

<template>
  <div class="weather-app">
    <!-- Weather app content -->
  </div>
</template>

<style>
.weather-app {
  margin: 20px auto;
  padding: 20px;
  max-width: 500px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

h1 {
  margin-top: 0;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

label {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

input[type="text"] {
  padding: 10px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
}

button[type="submit"] {
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0069d9;
}

h2 {
  margin-top: 0;
}

p {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.weather-data {
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  text-align: left;
}
</style>
