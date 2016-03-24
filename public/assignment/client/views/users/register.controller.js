(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $rootScope, $location, UserService) {

        $scope.register = register;

        function register(newUser) {

            if ($scope.user.password != $scope.user.verifiedPassword) {

                alert("Passwords do not match.  Please try again");

                $scope.password = "";
                $scope.verifiedPassword = "";
            }

            else {

                UserService.createUser(newUser, function (res) {
                    newUser._id = (new Date()).getTime();
                    $rootScope.currentUser = newUser;
                    $location.url('/profile')
                });

            }
        }

    }
})();