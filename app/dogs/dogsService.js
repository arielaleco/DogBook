app.factory('dogsService', function ($log, $q, $http) {

    dogsArr = [];
    function Dog(breed , imageUrl) {
        this.breed = breed;
        this.imageUrl=imageUrl;
    }


    GetAllDogsFromAPI();
    function GetAllDogsFromAPI() {

        $http.get("https://dog.ceo/api/breeds/list/all").then(function (response) {
            console.log(response);

            for (var dogName in response.data.message) { 
                console.log(dogName);

                //get image for each dog
                //===============================
                var oneDogUrl = "https://dog.ceo/api/breed/"+dogName+ "/images/random";
                $http.get(oneDogUrl).then(function (response) {    
                    var imageUrl = response.data.message;                        
                    dogsArr.push(new Dog(dogName, imageUrl));                                                                       
                }, function (error) {
                
                    dogsArr.push(new Dog(dogName, "https://images.dog.ceo/breeds/bluetick/n02088632_152.jpg"));
    
                })  
                //===============================




                
             }            
        },

            function Error() {

                $log.Error;

            });

            
    }

    function GetAllDogs() {
        // define asynchronous object
        var asyncAction = $q.defer();
        asyncAction.resolve(dogsArr);
        return asyncAction.promise;
    }

    


    return {
        GetAllDogs: GetAllDogs
        //   convertMovieDuration : convertMovieLength
    }
});