(function(){
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($http) {
       /* var users = [ {	"_id":123, "firstName":"Alice", "lastName":"Wonderland", "username":"alice", "password":"alice", "roles": ["student"]},
            {"_id":234, "firstName":"Bob", "lastName":"Hope", "username":"bob", "password":"bob", "roles": ["admin"]},
            {"_id":345, "firstName":"Charlie", "lastName":"Brown", "username":"charlie","password":"charlie", "roles": ["faculty"]},
            {"_id":456, "firstName":"Dan", "lastName":"Craig", "username":"dan", "password":"dan", "roles": ["faculty", "admin"]},
            {"_id":567, "firstName":"Edward", "lastName":"Norton", "username":"ed", "password":"ed", "roles": ["student"]}];

        */

        var api = {
            login: login,
            logout: logout,
            register: register,
            findUserByUsername: findUserByUsername,
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUser: deleteUser,
            updateUser: updateUser
        };
        return api;

        function login(user) {
            return $http.post("/api/login", user);
        }

        function logout() {
            return $http.post("/api/logout");
        }

        function register(user) {
            return $http.post("/api/register", user);
        }

        function findUserByUsername(username) {
            return $http.get("/api/assignment/user/username" + username);
        }

        function findUserByCredentials(username, password) {
            return $http.get("/api/assignment/user/username/" + username + "/password/" + password);
        }

        function findAllUsers() {
            return $http.get("/api/assignment/user");
        }

        function createUser(user) {
            console.log(user);
            return $http.post("/api/assignment/user", user);
        }

        function deleteUser(userId) {
            console.log(userId);
            return $http.delete("/api/assignment/user/" + userId);
        }

        function updateUser(userId, user) {
            return $http.put("/api/assignment/user/" + userId, user);
        }

            /*function findUserByCredentials(username, password, callback) {
                for (var i = 0; i <users.length; i++) {
                    var currentUser = users[i];
                    if (currentUser.username== username && currentUser.password == password) {
                        callback(currentUser);
                        break;
                    }
                }
            }

            function findAllUsers(callback) {
                return callback(users);
            }

            function createUser(user, callback) {
                users.push(user);
                callback(user);
            }

            function findUserIndex(userId) {
                var index = -1;
                for (var i = 0; i <users.length; i++) {
                    var currentUser = users[i];
                    if (user._id == id) {
                        index = i;
                        break;
                    }
                }
                return index;
            }

            function deleteUser(userId, callback) {
                var index = findUserIndex(userId);
                users.splice(index,1);
                callback(users);
            }

            function updateUser(userId, user, callback) {
                var index = findUserIndex(userId);
                user[index] = user;
                callback(user);
            }*/
    }
})();