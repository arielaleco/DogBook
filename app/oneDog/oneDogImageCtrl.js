app.controller("oneDogImageCtrl", function ($scope,$location, $routeParams,dogsService) {
    $scope.dogImage = $routeParams.dogImage ;
    console.log($scope.dogImage);

});