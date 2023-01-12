// Click on search box
// city name 
// submit
// fetch Api
// base url string and user string 
// Creates city name local storage
// display current temp
// display 5 day
// allow for searches

var apiKey = "189579eeb4103c71fbfaccf9d7f42125";
var cityInput = document.getElementById("search-input");
var btnEl = document.querySelector(".btn");

function search(event) {
    console.log(event);
    console.log(cityInput.value);
    // run a fetch with the cityInput.value
    // once fetch response is back call function to display the data
    // 
}

btnEl.addEventListener("click", search)


// function getWeather(cityName)
// funciton renderWeatherData(response)

function step1(cityName) {
    // do something with cityName
    var weatherData = fetch('getMyWeather');
    step2(weatherData, cityName);
}


function step2(data) {
    console.log(data);
    console.log(data2);
}

