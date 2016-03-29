(function(){
    angular
        .module("238Hem")
        .factory("UserService", UserService);

    function UserService($http) {

        var api = {
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUser: deleteUser,
            updateUser: updateUser
        };
        return api;

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
            return $http.post("/api/assignment/user", user);
        }

        function deleteUser(userId) {
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