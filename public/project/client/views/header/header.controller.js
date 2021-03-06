(function() {
    angular
        .module("238Hem")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $rootScope, UserService, $location) {

        $scope.logout = logout;

        function logout() {
            UserService
                .logout()
                .then(function (response) {
                    $rootScope.currentUser = null;
                    $location.url("/login");
                });
        }
    }

})();