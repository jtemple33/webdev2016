(function() {
    angular
        .module("238Hem")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $rootScope) {

        $scope.logout = logout;

        function logout() {
            $rootScope.currentUser = null;
        }
    }

})();