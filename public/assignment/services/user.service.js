(function(){
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService() {
        var users = [];
        var api = {
            updateUser: updateUser
        };
        return api;

        function updateUser(user) {

        }
    }
})();