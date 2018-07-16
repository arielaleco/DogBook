app.controller("dogsCtrl", function ($scope,dogsService) {
    
    $scope.dogsArr = [];
    
    dogsService.GetAllDogs().then(function (dogsArr) {
        $scope.dogsArr = dogsArr;
    }, function (error) {

        $log.error(error)
    });


});