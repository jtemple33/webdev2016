(function() {
    angular
        .module("238Hem")
        .controller("LoginController", LoginController);

    function LoginController($scope, $location, $rootScope, UserService) {

        $scope.login = login;

        function login(user) {
            UserService
                .findUserByCredentials(user.username, user.password)
                .then(function(res) {
                if (res.data) {
                    $rootScope.currentUser = res.data;
                    $location.url('/profile');
                }
            });
        }
    }
})();