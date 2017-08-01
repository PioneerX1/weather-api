var apiKey = require('./../.env').apiKey;

function Weather() {

}

Weather.prototype.getWeather = function(location, getTemp) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid='+apiKey).then(function(response) {
    getTemp(location, response.main.temp);
  }).fail(function(error) {
    $('.display').text(error.responseJSON.message);
  });
};

exports.weatherModule = Weather;
