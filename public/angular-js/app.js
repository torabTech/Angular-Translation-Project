angular.module("meanGameUI", ["ngRoute"]).config(routeConfig);

function routeConfig($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "angular-js/game-list/gameList.html",
      controller: "GamesController",
      controllerAs: "vm",
    })
    .when("/games/:id", {
      templateUrl: "angular-js/single-game/game.html",
      controller: "GameController",
      controllerAs: "vm",
    })
    .when("/add-game", {
      templateUrl: "angular-js/game-add/addGame.html",
      controller: "GameAddController",
      controllerAs: "vm",
    })
    .when("/edit-game/:id", {
      templateUrl: "angular-js/game-edit/editGame.html",
      controller: "EditGameController",
      controllerAs: "vm",
    })
    .when("/user-register", {
      templateUrl: "angular-js/user-registeration/user-register.html",
      controller: "RegisterController",
      controllerAs: "vm",
    })
    .otherwise({
      redirectTo: "/",
    });
}
