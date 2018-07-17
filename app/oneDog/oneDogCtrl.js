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
        $location.path("/oneDogLargeImage/" + dogImage);
    }
    // go and fetch al images for this breed
    //dogsService.GetAllImagesForDogBreed()



});