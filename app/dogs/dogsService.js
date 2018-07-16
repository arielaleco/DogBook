app.factory('dogsService', function ($log, $q, $http) {

    dogsArr = [];
    function Dog(breeds) {
        this.breeds = breeds;
    }


    GetAllDogsFromAPI();
    function GetAllDogsFromAPI() {

        $http.get("https://dog.ceo/api/breeds/list/all").then(function (response) {
            console.log(response);

            for (var x in response.data.message) { 
                console.log(x);
                dogsArr.push(new Dog(x));
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

    //https://dog.ceo/api/breed/affenpinscher/images/random


    return {
        GetAllDogs: GetAllDogs
        //   convertMovieDuration : convertMovieLength
    }
});