
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

var iconUrlOne = document.createElement("img");
iconUrlOne.setAttribute("src", `https://openweathermap.org/img/w/${data.list[3].weather[0].icon}.png`);
dayOneEl.appendChild(iconUrlOne);
var iconUrlTwo = document.createElement("img");
iconUrlTwo.setAttribute("src", `https://openweathermap.org/img/w/${data.list[11].weather[0].icon}.png`);
dayTwoEl.appendChild(iconUrlTwo);
var iconUrlThree = document.createElement("img");
iconUrlThree.setAttribute("src", `https://openweathermap.org/img/w/${data.list[19].weather[0].icon}.png`);
dayThreeEl.appendChild(iconUrlThree);
var iconUrlFour = document.createElement("img");
iconUrlFour.setAttribute("src", `https://openweathermap.org/img/w/${data.list[27].weather[0].icon}.png`);
dayFourEl.appendChild(iconUrlFour);
var iconUrlFive = document.createElement("img");
iconUrlFive.setAttribute("src", `https://openweathermap.org/img/w/${data.list[35].weather[0].icon}.png`);
dayFiveEl.appendChild(iconUrlFive);


    var tempElOne = document.createElement("h5");
    tempElOne.textContent = "Temp: "+data.list[3].main.temp + "F";
dayOneEl.appendChild(tempElOne);
    var tempElTwo = document.createElement("h5");
    tempElTwo.textContent = "Temp: "+data.list[11].main.temp + "F";
dayTwoEl.appendChild(tempElTwo);
var tempElThree = document.createElement("h5");
tempElThree.textContent = "Temp: "+data.list[19].main.temp + "F";
dayThreeEl.appendChild(tempElThree);
var tempElFour = document.createElement("h5");
tempElFour.textContent = "Temp: "+data.list[27].main.temp + "F";
dayFourEl.appendChild(tempElFour);
var tempElFive = document.createElement("h5");
tempElFive.textContent = "Temp: "+data.list[35].main.temp + "F";
dayFiveEl.appendChild(tempElFive);

// dayOneEl.appendChild(dateOne, iconUrlOne);

var windElOne = document.createElement("h5");
windElOne.textContent = "Wind: "+data.list[3].wind.speed + "mph";
dayOneEl.appendChild(windElOne);
var humidityElOne = document.createElement("h5");
humidityElOne.textContent = "Humidity: "+data.list[3].main.humidity + "%";
dayOneEl.appendChild(humidityElOne);

var windElTwo = document.createElement("h5");
windElTwo.textContent = "Wind: "+data.list[3].wind.speed + "mph";
dayTwoEl.appendChild(windElTwo);
var humidityElTwo = document.createElement("h5");
humidityElTwo.textContent = "Humidity: "+data.list[3].main.humidity + "%";
dayTwoEl.appendChild(humidityElTwo);

var windElThree = document.createElement("h5");
windElThree.textContent = "Wind: "+data.list[3].wind.speed + "mph";
dayThreeEl.appendChild(windElThree);
var humidityElThree = document.createElement("h5");
humidityElThree.textContent = "Humidity: "+data.list[3].main.humidity + "%";
dayThreeEl.appendChild(humidityElThree);

var windElFour = document.createElement("h5");
windElFour.textContent = "Wind: "+data.list[3].wind.speed + "mph";
dayFourEl.appendChild(windElFour);
var humidityElFour = document.createElement("h5");
humidityElFour.textContent = "Humidity: "+data.list[3].main.humidity + "%";
dayFourEl.appendChild(humidityElFour);

var windElFive = document.createElement("h5");
windElFive.textContent = "Wind: "+data.list[3].wind.speed + "mph";
dayFiveEl.appendChild(windElFive);
var humidityElFive = document.createElement("h5");
humidityElFive.textContent = "Humidity: "+data.list[3].main.humidity + "%";
dayFiveEl.appendChild(humidityElFive);
  
} 

btnEl.addEventListener("click", search);
