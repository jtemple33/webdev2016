var users = require('./user.mock.json');

module.exports = function(db, mongoose) {

    var UserSchema = require('./user.schema.server.js')(mongoose);

    var UserModel = mongoose.model("User", UserSchema);

    var service = {createUser: createUser,
                    findAllUser: findAllUser,
                    findUserById: findUserById,
                    updateUser: updateUser,
                    deleteUser: deleteUser,
                    findUserByUsername:findUserByUsername,
                    findUserByCredentials:findUserByCredentials};

    return service;

    function createUser(user) {
        users.push(user);
        return user;
    }

    function findAllUser() {
        return users;
    }

    function findUserById(id) {
        var result;
        for (var i = 0; i < users.length; i++) {
            var suspect = users[i];
            if (user._id == id) {
                result = suspect;
                break;
            }
        }
        return result;
    }

    function findUserIndexById(id) {
        var index = -1;
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            if (user._id == id) {
                index = i;
                break;
            }
        }
        return index;
    }

    function updateUser(userId, user) {
        target = findUserIndexById(userId);
        users[target] = user;
        return users;
    }

    function deleteUser(userId) {
        target = findUserIndexById(userId);
        users.splice(target,1);
        return users;
    }

    function findUserByUsername(username) {
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            if (user.username == username) {
                return user;
            }
        }

    }

    function findUserByCredentials(username, password) {
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            if (user.username == username && user.password == password) {
                return user;
            }
        }
    }


};