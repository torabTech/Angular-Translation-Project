angular.module('meanGameUI').controller('GameController', GameController);

function GameController($routeParams,GameFactory){
    const vm = this;
    const gameID = $routeParams.id;
    console.log('function is called');

    GameFactory.getOneGame(gameID).then(function(response){
        console.log('the response is')
        console.log(response)
        vm.game = response;
    });
}