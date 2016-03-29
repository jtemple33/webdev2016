(function(){
    angular
        .module("238Hem")
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

                newUser._id = (new Date()).getTime();

                UserService
                    .createUser(newUser)
                    .then(function (res) {
                    $rootScope.currentUser = newUser;
                    $location.url('/profile')
                });

            }
        }

    }
})();