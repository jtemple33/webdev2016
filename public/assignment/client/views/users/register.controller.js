(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $rootScope, $location, UserService) {

        $scope.register = register;

        function register(newUser) {
            UserService
                .createUser(newUser)
                .then(function (res) {
                    $rootScope.currentUser = newUser;
                    $location.url('/profile')
                });

            }
        }
})();