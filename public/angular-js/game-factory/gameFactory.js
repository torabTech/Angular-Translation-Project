
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

    function addOne(data){
        return $http.post('/api/games',data)
            .then(completed)
            .catch(failed);
    }

    function deleteOne(id){
        return $http.delete('/api/games/'+id)
            .then(completed)
            .catch(failed);
    }

    function updateOne(id,data){
        return $http.put('/api/games/'+id,data)
            .then(completed)
            .catch(failed);
    }

    function registerUser(data){
        return $http.post('/api/register',data).then(completed).catch(failed);
    }
    //---------------------------

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
        getOneGame : getOne,
        addOneGame : addOne,
        deleteOneGame: deleteOne,
        updateOneGame : updateOne,
        registerUser : registerUser
    }
}