app.controller("dogsCtrl", function ($scope, $location,dogsService) {

    $scope.dogsArr = [];

    dogsService.GetAllDogs().then(function (dogsArr) {
        console.log(dogsArr);
        $scope.dogsArr = dogsArr;
    }, function (error) {

        $log.error(error)
    });

    $scope.ChangeAllImages = function () {
       
         for (var i = 0; i < dogsArr.length; i++) {

               dogsService.getOneDogImageFromAPI(i).then(function (dogIndex) {
                $scope.message = "replaceing image " + dogIndex +" /" + dogsArr.length ;  
               
            }, function (error) {
               

            })
         }
         $scope.message ="";

        //-----------------------------------------------------
        // $scope.message = "replaceing " + dogsArr.length + " images..."
        // // go over the array and bring one image at a time
        // for (var i = 0; i < dogsArr.length; i++) {
        //     $scope.message = "replaceing " + dogsArr[i].breed + " image now (" + i + "/" + dogsArr.length + ")";
        //     dogsService.changeThisDogImage(i);
        // }


    }

    $scope.openOneDog = function(dog){
        console.log("here" + dog.breed);
        $location.path("/oneDog/" + dog.breed);
    }

    


});