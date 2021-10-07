
angular.module('meanGameUI').factory('GameFactory',GameFactory);

function GameFactory($http){

    function getAll(){
        return $http.get('/api/games')
            .then(completed).catch(failed);
    } 

    function getOne(id){
        return $http.get('/api/games/'+id)
            .then(completed)
            .catch(failed);
    }

    function completed(response){
        console.log('factory function is called');
        console.log(response)
        return response.data
    }

    function failed(error){
        return error;
    }
    return {
        getAllGames : getAll,
        getOneGame : getOne
    }
}