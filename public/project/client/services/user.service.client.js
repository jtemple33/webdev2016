(function(){
    angular
        .module("238Hem")
        .factory("UserService", UserService);

    function UserService($http) {

        var api = {
            login: login,
            logout: logout,
            register: register,
            loggedin: loggedin,
            //addToCart: addToCart,
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUser: deleteUser,
            updateUser: updateUser
        };
        return api;

        function login(user) {
            return $http.post("/api/project/login", user);
        }

        function loggedin(user) {
            return $http.get("/api/project/loggedin", user);
        }

        function logout() {
            return $http.post("/api/project/logout");
        }

        function register(user) {
            return $http.post("/api/project/register", user);
        }

        function findUserByUsername(username) {
            return $http.get("/api/project/user/username" + username);
        }

        function findUserByCredentials(username, password) {
            return $http.get("/api/project/user/username/" + username + "/password/" + password);
        }

        function findAllUsers() {
            return $http.get("/api/project/user");
        }

        function createUser(user) {
            return $http.post("/api/project/createUser", user);
        }

        function deleteUser(userId) {
            console.log(userId);
            return $http.delete("/api/project/user/" + userId);
        }

        function updateUser(userId, user) {
            return $http.put("/api/project/user/" + userId, user);
        }
    }
})();