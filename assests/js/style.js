
var apiBase = "api.openweathermap.org/data/2.5/forecast?q=";
var apiKey = "189579eeb4103c71fbfaccf9d7f42125";
var cityInput = document.getElementById("search-input");
var btnEl = document.querySelector(".btn");
var currentdayEl = document.getElementsByClassName("current-date");
// var todayEl = document.getElementById("today");
var fiveEl = document.getElementById("five");

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
    var todayEl = document.getElementById("today");
    var nameEl = document.createElement("h2");
    nameEl.textContent = data.name;
    // todayEl.appendChild(nameEl);
    todayEl.appendChild(nameEl);
    var dateEl = document.createElement("h3");
    dateEl.textContent = data.dt;
    todayEl.appendChild(dateEl);
    var iconEl = document.createElement("img");
    iconEl.textContent = data.weather[0].icon;
    todayEl.appendChild(iconEl);
    var tempEl = document.createElement("h5");
    tempEl.textContent = data.main.temp;
    todayEl.appendChild(tempEl);
    var windEl = document.createElement("h5");
    windEl.textContent = data.wind.speed;
    todayEl.appendChild(windEl);
    var humidityEl = document.createElement("h5");
    humidityEl.textContent = data.main.humidity;
    todayEl.appendChild(humidityEl);
} 

function forecastData(data) {
    
    var dateEl = document.createElement("h3");
    dateEl.textContent = data.list[i].dt;
    var iconEl = document.createElement("img");
    iconEl.textContent = data.list[i].weather[0].icon;
    var tempEl = document.createElement("h5");
    tempEl.textContent = data.list[i].temp;
    var windEl = document.createElement("h5");
    windEl.textContent = data.list[i].wind.speed;
    var humidityEl = document.createElement("h5");
    humidityEl.textContent = data.list[i].humidity;
} 

btnEl.addEventListener("click", search);
