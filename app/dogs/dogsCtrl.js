app.controller("dogsCtrl", function ($scope,dogsService) {
    
    $scope.dogsArr = [];
    
    dogsService.GetAllDogs().then(function (dogsArr) {
        console.log(dogsArr);
        $scope.dogsArr = dogsArr;
    }, function (error) {

        $log.error(error)
    });

    $scope.ChangeAllImages = function (){    
        console.log("ChangeAllImages");
    }


});