<script setup>
import { useWeatherStore } from './stores/weather';

const weatherStore = useWeatherStore();

</script>

<template>

<div class="container">
  <div class="wrap">
    <!-- Search Box for Location -->
    <div class="search-box">
      <input type="text" placeholder="Search..." class="search-bar"
      v-model="weatherStore.location_query"
      @keypress="weatherStore.fetchWeather"
      >
    </div>

    <!-- Weather Information -->
    <div class="weather-info" v-if="weatherStore.weather.main !=undefined">
      <div class="location-box">
          <div class="location">{{ weatherStore.weather.name }}, {{ weatherStore.weather.sys.country }}</div>
          <div class="date">{{ new Date().toLocaleString() }}</div>
      </div>

      <div class="weather-box">
        <div class="temp">{{ weatherStore.weather.main.temp }} °c</div>
        <div class="weather">{{ weatherStore.weather.weather[0].main }}</div>
        <div class="icon">
          <img :src="`http://openweathermap.org/img/wn/${weatherStore.weather.weather[0].icon}@2x.png`" alt="">
        </div>
        <div class="other-info">
          <span class="pressure">Pressure: {{ weatherStore.weather.main.pressure }} mb</span>
          <span class="pressure">Humidity: {{ weatherStore.weather.main.humidity }} %</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- weather region -->



</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;900&display=swap'); 

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.container{
  background-image: url("./assets/default.jpg");
  background-size: cover;
  background-position: center;
  transition: 0.4s;
  width: 375px;
  margin: 0 auto;
  border-radius: 25px;
  margin-top: 50px;
  box-shadow: 0px 0px 30px #00000065;
}
.wrap{
  height: 700px;
  padding: 25px;
  border-radius: 25px;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.4));
}

.search-box .search-bar{
  display: block;
  width: 100%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 8px rgba(0,0,0,0.25);
  border-radius: 10px;
  transition: 0.4s;
}

.search-box .search-bar:focus{
  box-shadow: 0px 0px 16px rgba(0,0,0,0.25);
  background-color: rgba(255, 255, 255, 0.75);
}

.location-box .location{
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  font-style: italic;
  text-align: center;
  margin-top: 30px;
}

.location-box .date{
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
}

.weather-box{
  text-align: center;
}

.weather-box .temp{
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 100px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255,255,255,0.25);
  border-radius: 16px;
  margin: 30px 0;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  font-style: italic;
}

.weather-box .weather{
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.other-info{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pressure{
  color: #fff;
  font-size: 18px;
}

</style>