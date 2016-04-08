(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, $rootScope, UserService) {

        $scope.update = update;

        function update(user) {
            UserService
                .updateUser(user._id, user)
                .then(function(res) {
                $rootScope.currentUser = user;
                alert("Successfully updated profile")
            });
        }
    }
})();