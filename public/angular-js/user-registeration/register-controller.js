angular.module('meanGameUI').controller('RegisterController',UserRegister);

function UserRegister(GameFactory){
    const vm = this;

    vm.register = function(){
        const formData = {
            name : vm.name,
            username : vm.username,
            password : vm.password,
            repeatPassword : vm.repeatPassword
        }

        if(!(formData.password === formData.repeatPassword)){
            alert('Passwords Not Matched...')
            return;
        }

        GameFactory.registerUser(formData).then(result=>{
            window.location.href= '#!/';
            
        })

    }
    
}