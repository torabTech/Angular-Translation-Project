angular.module("meanGameUI", ["ngRoute"]).config(routeConfig);

function routeConfig($routeProvider) {
  $routeProvider
    .when("/games", {
      templateUrl: "angular-app/game-list/gameList.html",
      controller: "GamesController",
      controllerAs: "vm",
    }).when('/games/:id',{
        templateUrl : "angular-app/single-game/game.html",
        controller: 'GameController',
        controllerAs : 'vm'
    });
     /* .otherwise({
      redirectTo: "/",
    });  */

   // $locationProvider.html5Mode(true);
}
