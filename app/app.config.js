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
      }).state('moviepage', {
        url: '/moviepage',
        component: 'moviepage'
      }).state('sports', {
        url: '/sports',
        component: 'sports'
      }).state('bills', {
        url: '/bills',
        component: 'bills'
      }).state('todo', {
        url: '/todo',
        component: 'todo'
      })

    $urlServiceProvider.rules.otherwise({
      state: 'home'
    })
  }

}());
