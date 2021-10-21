angular.module('meanGameUI')
    .controller('GamesController', GamesController);

function GamesController(GameFactory,$route){
    const vm = this;
    vm.title = 'Welcome to MEAN-Stack Game';

    GameFactory.getAllGames().then(function(response){
        vm.games = response;
    })


    vm.delete = function(id){
        if(confirm('Are you sure to delete this game?')){
            GameFactory.deleteOneGame(id).then(result=>{
                console.log(result);
                $route.reload();
            })
        }
      
    }


}