(function()
{
    angular
        .module("238Hem")
        .controller("AdminUsersController", AdminUsersController);

    function AdminUsersController($scope, UserService)
    {
        $scope.remove = remove;
        $scope.update = update;
        $scope.add    = add;
        $scope.select = select;

        function init() {
            UserService
                .findAllUsers()
                .then(handleSuccess, handleError);
        }
        init();

        function remove(user)
        {
            console.log(user._id);
            UserService
                .deleteUser(user._id)
                .then(function() {
                    init();
                });
        }

        function update(user)
        {
            UserService
                .updateUser(user._id, user)
                .then(function() {
                    init();
                });
        }

        function add(user)
        {
            UserService
                .createUser(user)
                .then(function() {
                    init();
                    $scope.user = null;
                });
        }

        function select(user)
        {
            $scope.user = angular.copy(user);
        }

        function handleSuccess(response) {
            $scope.users = response.data;
        }

        function handleError(error) {
            $scope.error = error;
        }
    }
})();