app.controller("oneDogCtrl", function ($scope,$location, $routeParams,dogsService) {
    $scope.dogBreed = $routeParams.dogBreed ;
   
    $scope.oneBreedDogsArr = [];

    dogsService.GetAllDogsFromBreed($scope.dogBreed).then(function (oneBreedDogsArr) {
        console.log(oneBreedDogsArr);
        $scope.oneBreedDogsArr = oneBreedDogsArr;
    }, function (error) {

        $log.error(error)
    });


    $scope.openOneDogLargeImage=  function (dogImage){
        console.log("open one dog image-->" + dogImage);     

      //  need to replace all  https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_10588.jpg
        dogsService.setSelectedDogImage(dogImage);
        $location.path("/oneDogLargeImage" );
       
    }
    


});