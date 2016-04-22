(function(){
    angular
        .module("238Hem")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $rootScope, $location, UserService) {

        $scope.register = register;

        function register(newUser) {
            if(newUser.password != newUser.verifiedPassword) {
                alert("Your passwords don't match!");
            }
            else {
                delete newUser.verifiedPassword;
                newUser.role = "admin";
                UserService
                    .register(newUser)
                    .then(function (res) {
                        var user = res.data;
                        console.log(res);
                        if(!res.data) {
                            alert("A user already exists with this username. Please login");
                            $location.url('/login')
                        }
                        else
                        {
                            $rootScope.currentUser = user;
                            $location.url('/profile')
                        }
                    });

            }
        }

    }
})();