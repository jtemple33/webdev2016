(function(){
    angular
        .module("238Hem")
        .controller("MainController", MainController);

    function MainController($scope, $location) {
        $scope.$location = $location;
    }

})();