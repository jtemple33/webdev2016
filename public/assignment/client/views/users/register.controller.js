(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $rootScope, $location, UserService) {

        $scope.register = register;

        function register(newUser) {
            newUser._id = (new Date()).getTime();

            UserService
                .createUser(newUser)
                .then(function (res) {
                    $rootScope.currentUser = newUser;
                    $location.url('/profile')
                });

            }
        }
})();