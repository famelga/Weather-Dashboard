// Click on search box
// city name
// submit
// fetch Api
// base url string and user string
// Creates city name local storage
// display current temp
// display 5 day
// allow for searches

var apiBase = "api.openweathermap.org/data/2.5/forecast?q=";
var apiKey = "189579eeb4103c71fbfaccf9d7f42125";
var cityInput = document.getElementById("search-input");
var btnEl = document.querySelector(".btn");
var currentdayEl = document.getElementsByClassName("current-date");

function search(event) {
  event.preventDefault;
  getForecast();
}
//   console.log(event);
//   console.log(cityInput.value);
//   console.log(typeof cityInput.value);
function getForecast() {
  var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput.value + "&appid=" + apiKey + "&units=imperial";
  console.log(requestUrl);
  // var api = apiBase+cityInput+apiKey;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    //   currentdayEl.textContent = data;
    });
    getWeather();
  // run a fetch with the cityInput.value
  // once fetch response is back call function to display the data
}

function getWeather(cityName) {
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +cityInput.value + "&appid=" + apiKey + "&units=imperial";
    console.log(requestUrl);
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    //   currentdayEl.textContent = data;
    });
}

//     // do something with cityName
//     var weatherData = fetch('getMyWeather');
//     step2(weatherData, cityName);
// }

// function renderWeatherData(data) {
//     console.log(data);
//     console.log(data2);
// }

btnEl.addEventListener("click", search);
