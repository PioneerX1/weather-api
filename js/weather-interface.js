var Weather = require('./../js/weather.js').weatherModule;

var getTemp = function(location, tempData) {
  $('.display').text("The temperature in "+location+" is "+ tempData + "degress Kelvin");
};

$(document).ready(function() {
  var newWeather = new Weather(); //save location for prototype?
  $('#weather-form').submit(function(event) {
    event.preventDefault();
    var location = $('#location').val();
    $('#location').val() = "";
    newWeather.getWeather(location, getTemp);
  });
});
