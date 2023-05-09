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