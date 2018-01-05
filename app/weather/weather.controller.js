(function() {
  angular
    .module('chasenote')
    .controller('WeatherController', WeatherController)

  function WeatherController($http) {
    const vm = this

    vm.$onInit = function() {

      vm.showData = false

      vm.getWeather = function() {
        let zipcode = vm.zipcode

        $http.get(`https://api.wunderground.com/api/0c756c2f6fb68c00/geolookup/q/${zipcode}.json`)
          .then(results => {
            console.log(results);
            vm.showData = true
            vm.city = results.data.location.city;
            vm.state = results.data.location.state;
            vm.link = results.data.location.wuiurl;
          })

        $http.get(`https://api.wunderground.com/api/0c756c2f6fb68c00/forecast/q/${zipcode}.json`)
          .then(result => {
            console.log(result);
            vm.weather = result.data.forecast.simpleforecast.forecastday
          })
        vm.weather = [];
        vm.zipcode = '';
      }

    }
  }
}());
