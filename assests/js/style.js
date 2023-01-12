// Click on search box
// city name
// submit
// fetch Api
// base url string and user string
// Creates city name local storage
// display current temp
// display 5 day
// allow for searches

var apiBase = "api.openweathermap.org/data/2.5/forecast?q="
var apiKey = "&appid=189579eeb4103c71fbfaccf9d7f42125";
var cityInput = document.getElementById("search-input");
var btnEl = document.querySelector(".btn");

function search(event) {
  console.log(event);
  console.log(cityInput.value);
  console.log(typeof cityInput.value);
  var api = apiBase + cityInput.value + apiKey;
  console.log(api)
// var api = apiBase+cityInput+apiKey;
  fetch(api)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  // run a fetch with the cityInput.value
  // once fetch response is back call function to display the data
  // fetch(apiBase + cityInput.value + "&appid=" + apiKey)
}

// function getWeather(cityName) {
//     // do something with cityName
//     var weatherData = fetch('getMyWeather');
//     step2(weatherData, cityName);
// }

// function renderWeatherData(data) {
//     console.log(data);
//     console.log(data2);
// }

btnEl.addEventListener("click", search);
