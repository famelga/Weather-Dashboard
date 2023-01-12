
var apiBase = "api.openweathermap.org/data/2.5/forecast?q=";
var apiKey = "189579eeb4103c71fbfaccf9d7f42125";
var cityInput = document.getElementById("search-input");
var btnEl = document.querySelector(".btn");
var currentdayEl = document.getElementsByClassName("current-date");

function search(event) {
  event.preventDefault;
  getForecast();
}

function getForecast() {
  var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput.value + "&appid=" + apiKey + "&units=imperial";
  console.log(requestUrl);
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log("forecast");
      console.log(data);
    });
    getWeather();

}

function getWeather(cityName) {
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +cityInput.value + "&appid=" + apiKey + "&units=imperial";
    console.log(requestUrl);
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log("current");
      console.log(data);
  
    });
}

// current weather data:
function currentWeatherData(data) {
    // name data.name
    var nameEl = document.createElement("h2");
    // date data.dt
    var dateEl = document.createElement("h3");
    // icon data.weather[0].icon
    var iconEl = document.createElement("img");
    // temp data.main.temp
    var tempEl = document.createElement("h5");
    // wind data.wind.speed
    var windEl = document.createElement("h5");
    // humidity data.main.humidity
    var humidityEl = document.createElement("h5");
} 

function forecastData(data) {
    
    // date data.list[i].dt
    var dateEl = document.createElement("h3");
    // icon data.list[i].weather[0].icon
    var iconEl = document.createElement("img");
    // temp data.list[i].temp
    var tempEl = document.createElement("h5");
    // wind data.list[i].wind.speed
    var windEl = document.createElement("h5");
    // humidity data.list[i].humidity
    var humidityEl = document.createElement("h5");
} 

btnEl.addEventListener("click", search);
