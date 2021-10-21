angular.module('meanGameUI').controller('EditGameController',editGame);

function editGame(GameFactory,$routeParams){
        const vm = this;
        
        let id;
        vm.load = function(){
            id = $routeParams.id;
            GameFactory.getOneGame(id).then(result=>{
                console.log(result);

                vm.title = result.title;
                vm.price = result.price;
                vm.year = result.year;
                vm.maxPlayers = result.maxPlayers;
                console.log(result.maxPlayers)
            })
            
        }

        vm.update = function(){

            const formData = {
                title: vm.title,
                price : vm.price,
                year : vm.year,
                maxPlayers : vm.maxPlayers
            }

            GameFactory.updateOneGame(id,formData)
                .then(result=>{
                    console.log(result)

                    window.location.href = '#!/';

                    alert(result.message);
                    
                });
        }


}