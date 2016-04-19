(function() {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $location, $rootScope, UserService) {

        $scope.login = login;

        function login(user) {
            UserService
                /*.findUserByCredentials(user.username, user.password)
                .then(function (response) {
                    $rootScope.currentUser = response.data;
                    $rootScope.currentUser.email = $rootScope.currentUser.emails[0];
                    $location.url('/profile');
                })*/
                .login(user)
                .then(function (response) {
                    $rootScope.currentUser = response.data;
                    $location.url("/profile");
                });
        }

        /*function login(user) {
            UserService.findUserByCredentials(user.username, user.password, function(res) {
                if (res) {
                    $rootScope.currentUser = res;
                    $location.url('/profile');
                }
            });
        }*/
    }
})();