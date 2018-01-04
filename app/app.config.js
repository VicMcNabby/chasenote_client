(function() {

  angular
    .module('chasenote')
    .config(config)

  function config($stateProvider, $locationProvider, $urlServiceProvider) {
    $locationProvider.html5Mode(true)

    $stateProvider
      .state('home', {
        url: '/',
        component: 'landingpage'
      }).state('weather', {
        url: '/weather',
        component: 'weather'
      })

    $urlServiceProvider.rules.otherwise({
      state: 'home'
    })
  }

}());
