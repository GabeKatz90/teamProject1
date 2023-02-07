// Display date
var currentDay = moment().format("dddd, MMMM Do");

function functionDay() {
$(".current-date").text(currentDay);
};

// My API Key
var apiKey1 = '0771c372e9b12d916768d6ec72becb9c';
var apiKey2 = 'f73b328648mshb951bb7e2b043b9p1f299ajsnd32e56f7470f'

// DOM Elements
var inputEl = document.querySelector('.input');
var searchBtnEl = document.querySelector('.search-button');
var citiesListEl = document.querySelector(".cities-list");


// Stores cityName in localStorage
var cityName = "london,paris,milan";
// localStorage.getItem('cityNameStore');

// Stores value in localStorage
function recordCityData() {
localStorage.setItem('cityNameStore', inputEl.value);
}

// Event Listener upon the click of the search button
// searchBtnEl.addEventListener('click', getWeather);

searchBtnEl.addEventListener('click', function (e) {
  e.preventDefault()
  getWeather(inputEl.value)
  getFood(inputEl.value)
  getHotel(inputEl.value)
})

// api variables
// var URLFood = "https://the-fork-the-spoon.p.rapidapi.com/locations/v2/auto-complete?text=" + cityName;
// var URLHotels = "https://hotels4.p.rapidapi.com/locations/v3/search?q=" + cityName + "locale=en_US&langid=1033&siteid=300000001";

function getWeather(cityName) {
  var URLWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=" + apiKey1;
  $.ajax({
    url: URLWeather,
    method: "GET"
  })

    // Adds weather info to page
    .then(function (response) {
      $('.city').html("<h2>" + response.name + "</h2>");
      $('.weather-icon').html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' >");
      $('.wind').text("Wind Speed: " + response.wind.speed + " MPH");
      $('.humidity').text("Humidity: " + response.main.humidity + "%");
      $(".temperature").text("Temperature: " + response.main.temp + " C");
    });
}

////
function getHotel(cityName) {
  var URLFood = "https://hotels4.p.rapidapi.com/locations/v3/search?q=" + cityName + "locale=en_US&langid=1033&siteid=300000001&appid=" + apiKey2;
  $.ajax({
    url: URLFood,
    method: "GET"
  })

    // Adds the weather info to page
    .then(function (response) {
      $(response)
    });
}


