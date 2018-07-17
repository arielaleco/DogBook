var app = angular.module("dogsApp" , ["ngRoute"]); 

app.config(function($routeProvider) {  
    $routeProvider
    .when('/', {
      templateUrl: 'app/dogs/dogs.html',
      controller: 'dogsCtrl'
    })
    .when('/oneDog/:dogBreed', {
      
      templateUrl: 'app/oneDog/oneDog.html',
      controller: 'oneDogCtrl'
    })
    .when('/oneDogLargeImage/:dogImage', {
      
      templateUrl: 'app/oneDog/oneDogLargeImage.html',
      controller: 'oneDogImageCtrl'
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
