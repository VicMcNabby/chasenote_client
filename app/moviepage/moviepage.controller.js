(function() {
  angular
    .module('chasenote')
    .controller('MoviePageController', MoviePageController)

  function MoviePageController($http) {
    const vm = this


    $http.get(`http://data.tmsapi.com/v1.1/movies/showings?startDate=2018-01-10&zip=80020&api_key=zmq57bmdq5nvysbkrgmfujup`)
      .then(results => {
        console.log(results);
      })

  }
}());
