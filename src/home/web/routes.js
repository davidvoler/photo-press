(function () {

  function routes($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: '/static/src/home/web/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })

      .otherwise({redirectTo: '/home'});
  }


  angular.module('photo.press')
    .config(['$routeProvider', routes]);
}());

