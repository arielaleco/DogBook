app.controller("oneDogImageCtrl", function ($scope,$location, $routeParams,dogsService) {
    //$scope.dogImage = $routeParams.dogImage ;
    $scope.dogImage = dogsService.getSelectedDogImage();    
    console.log($scope.dogImage);

});