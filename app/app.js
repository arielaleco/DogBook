var app = angular.module("dogsApp" , ["ngRoute"]); 

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'index.html'
      
    })
    .when('/oneDog:dogName', {
      templateUrl: 'app/oneDog/oneDog.html',
      controller: 'oneDogCtrl'
    })
    // .when('/moviessection', {
    //     templateUrl: 'app/movies/moviessection.html',
    //     controller: 'movieCtrl'
    //   })
    // .when('/moviessection/:movieId', {
    //     templateUrl: 'app/movies/movieFullDetails.html',
    //     controller: 'movieFullDetailsCtrl'
    //   })
    .otherwise({
      redirectTo: '/'
    })
  })
