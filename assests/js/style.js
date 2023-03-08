
var apiBase = "api.openweathermap.org/data/2.5/forecast?q=";
var apiKey = "189579eeb4103c71fbfaccf9d7f42125";
var cityInput = document.getElementById("search-input");
var btnEl = document.querySelector(".btn");
var currentdayEl = document.getElementsByClassName("current-date");


function search(event) {
  event.preventDefault;
  getWeather(cityInput.value);
}

function getWeather(cityName) {
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +cityName + "&appid=" + apiKey + "&units=imperial";
    console.log(requestUrl);
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log("current");
      console.log(data);
      currentWeatherData(data);
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
      .then(function(response){
        return response.json()
      })
      .then(function(data){
        console.log(data)
        forecastData(data)
      })
    });
}

function currentWeatherData(data) {
    var todayEl = document.getElementById("today");
    var nameEl = document.createElement("h2");
    nameEl.textContent = data.name;
    todayEl.appendChild(nameEl);
    var dateEl = document.createElement("h3");
    dateEl.textContent = moment().format("MM/DD/YYYY");
    todayEl.appendChild(dateEl);
    var iconEl = document.createElement("img");
    iconEl.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    todayEl.appendChild(iconEl);
    var tempEl = document.createElement("h5");
    tempEl.textContent = "Temp: "+data.main.temp + "F";
    todayEl.appendChild(tempEl);
    var windEl = document.createElement("h5");
    windEl.textContent = "Wind: "+data.wind.speed + "mph";
    todayEl.appendChild(windEl);
    var humidityEl = document.createElement("h5");
    humidityEl.textContent = "Humidity: "+data.main.humidity + "%";
    todayEl.appendChild(humidityEl);

} 

function forecastData(data) {
var dayOneEl = document.querySelector(".day-one");
var dayTwoEl = document.querySelector(".day-two");
var dayThreeEl = document.querySelector(".day-three");
var dayFourEl = document.querySelector(".day-four");
var dayFiveEl = document.querySelector(".day-five");

var dateOne = document.createElement("h3"); 
dateOne.textContent= moment().add(1, "day").format("MM/DD/YYYY");
dayOneEl.appendChild(dateOne);
var dateTwo = document.createElement("h3"); 
dateTwo.textContent= moment().add(2, "day").format("MM/DD/YYYY");
dayTwoEl.appendChild(dateTwo);
var dateThree = document.createElement("h3"); 
dateThree.textContent= moment().add(3, "day").format("MM/DD/YYYY");
dayThreeEl.appendChild(dateThree);
var dateFour = document.createElement("h3"); 
dateFour.textContent= moment().add(4, "day").format("MM/DD/YYYY");
dayFourEl.appendChild(dateFour);
var dateFive = document.createElement("h3"); 
dateFive.textContent= moment().add(5, "day").format("MM/DD/YYYY");
dayFiveEl.appendChild(dateFive);

var iconUrlOne = `https://openweathermap.org/img/w/${data.list[3].weather[0].icon}.png`;
var iconUrlTwo = `https://openweathermap.org/img/w/${data.list[11].weather[0].icon}.png`;
var iconUrlThree = `https://openweathermap.org/img/w/${data.list[19].weather[0].icon}.png`;
var iconUrlFour = `https://openweathermap.org/img/w/${data.list[27].weather[0].icon}.png`;
var iconUrlFive = `https://openweathermap.org/img/w/${data.list[35].weather[0].icon}.png`;


var tempOne = "Temp: "+data.list[3].main.temp + "F";
var tempTwo = "Temp: "+data.list[11].main.temp + "F";
var tempThree = "Temp: "+data.list[19].main.temp + "F";
var tempFour = "Temp: "+data.list[27].main.temp + "F";
var tempFive = "Temp: "+data.list[35].main.temp + "F";

dayOneEl.appendChild(dateOne, iconUrlOne);
    // var fiveEl = document.getElementById("five")
    // var dateEl = document.createElement("h3");
    // dateEl.textContent = data.list[i].dt;
    // fiveEl.appendChild(dateEl);
    // var iconEl = document.createElement("img");
    // iconEl.textContent = data.list[i].weather[0].icon;
    // fiveEl.appendChild(iconEl);
    // var tempEl = document.createElement("h5");
    // tempEl.textContent = data.list[i].temp;
    // fiveEl.appendChild(tempEl);
    // var windEl = document.createElement("h5");
    // windEl.textContent = data.list[i].wind.speed;
    // fiveEl.appendChild(windEl);
    // var humidityEl = document.createElement("h5");
    // humidityEl.textContent = data.list[i].humidity;
    // fiveEl.appendChild(humidityEl);
} 

btnEl.addEventListener("click", search);
