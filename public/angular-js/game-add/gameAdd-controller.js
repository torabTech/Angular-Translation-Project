angular.module('meanGameUI').controller('GameAddController',addGame);

function addGame(GameFactory){
    const vm = this;


    vm.insert = function(){
        
        const formData = {
            title : vm.title,
            price: parseFloat(vm.price),
            year : vm.year,
            maxPlayer : vm.maxPlayer
        }

        GameFactory.addOneGame(formData).then(result=>{
            
            window.location.href = '#!/';
            alert(result.message);

        });

    }
}