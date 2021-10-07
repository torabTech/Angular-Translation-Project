angular.module('meanGameUI')
    .controller('GamesController', GamesController);

function GamesController(GameFactory){
    const vm = this;
    vm.title = 'Welcome to MEAN-Stack Game';

    GameFactory.getAllGames().then(function(response){
        vm.games = response;
    })


   

}