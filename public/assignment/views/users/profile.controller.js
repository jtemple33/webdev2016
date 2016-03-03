(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, UserService) {

        $scope.update = update;

        function update(user) {
            UserService.updateUser(user);
        }

    }
})();