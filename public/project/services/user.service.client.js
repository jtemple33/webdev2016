(function(){
    angular
        .module("238Hem")
        .factory("UserService", UserService);

    function UserService() {
        var users = [ {	"_id":123, "firstName":"Alice", "lastName":"Wonderland", "username":"alice", "password":"alice", "roles": ["student"]},
            {"_id":234, "firstName":"Bob", "lastName":"Hope", "username":"bob", "password":"bob", "roles": ["admin"]},
            {"_id":345, "firstName":"Charlie", "lastName":"Brown", "username":"charlie","password":"charlie", "roles": ["faculty"]},
            {"_id":456, "firstName":"Dan", "lastName":"Craig", "username":"dan", "password":"dan", "roles": ["faculty", "admin"]},
            {"_id":567, "firstName":"Edward", "lastName":"Norton", "username":"ed", "password":"ed", "roles": ["student"]}];

        var api = {
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUser: deleteUser,
            findUserIndex: findUserIndex,
            updateUser: updateUser
        };
        return api;

        function findUserByCredentials(username, password, callback) {
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
        }
    }
})();