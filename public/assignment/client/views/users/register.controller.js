(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $rootScope, $location, UserService) {

        $scope.register = register;

        function register(newUser) {
            newUser.emails = [newUser.email];
            newUser.roles = ['student'];
            if(newUser.password != newUser.verifiedPassword) {
                alert("Your passwords don't match!");
            }
            else {
                delete newUser.verifiedPassword;
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