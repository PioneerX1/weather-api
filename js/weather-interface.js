var Weather = require('./../js/weather.js').weatherModule;

var majorCities = ["London", "Chicago", "Seattle", "Moscow", "Beijing"];
var getTemp = function(location, tempData) {
  $('.display').text("The temperature in "+location+" is "+ convertKelvins(tempData) + " degrees fahrenheit!");
};

var getTempIntl = function(location, tempData) {
  $('#'+location).text(convertKelvins(tempData));
  // convertKelvins(tempData) );
  //return convertKelvins(tempData);
};

var convertKelvins = function(kelvins) {
  var fahrenheit = 9/5*(kelvins - 273) + 32;
  return Math.floor(fahrenheit);
};

// function getCityTemp(city, getTemp) {
//
// }

$(document).ready(function() {
  var newWeather = new Weather(); //save location for prototype?
  majorCities.forEach(function(location){
    $('.int-times').append("<div class='intl-box'> "
    + location +
    "<br>" + "<span id='"
    + location + "'" +
    newWeather.getWeather(location, getTempIntl) + "</span>" +
    "</div>");
  });



  $('#weather-form').submit(function(event) {
    event.preventDefault();
    var location = $('#location').val();
    $('#location').empty();
    newWeather.getWeather(location, getTemp);
  });
});
