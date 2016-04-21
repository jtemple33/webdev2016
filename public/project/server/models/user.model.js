var q = require("q");

module.exports = function(mongoose, userSchema) {

    var users = mongoose.model("project.User", userSchema);

    var service = {createUser: createUser,
        findAllUsers: findAllUsers,
        findUserById: findUserById,
        updateUser: updateUser,
        deleteUser: deleteUser,
        findUserByUsername:findUserByUsername,
        findUserByCredentials:findUserByCredentials};

    return service;

    function createUser(user) {

        // use q to defer the response
        var deferred = q.defer();
        console.log(user);

        users.create(user, function(err, doc) {
            if (err) {
                //rejects promise if error
                deferred.reject(err);
            } else {
                //resolve promise
                deferred.resolve(doc);
            }

        });
        // return a promise
        return deferred.promise;
    }

    function findAllUsers() {
        // use q to defer the response
        var deferred = q.defer();

        users.find(function(err, doc) {
            if (err) {
                //rejects promise if error
                deferred.reject(err);
            } else {
                //resolve promise
                deferred.resolve(doc);
            }

        });
        // return a promise
        return deferred.promise;
    }

    function findUserById(id) {
        var deferred = q.defer();
        users.findById(id, function( err, doc) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
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
        var deferred = q.defer();
        console.log(userId);
        console.log(user);
        users.update({_id: userId}, {$set: user}, function(err, doc) {
            if (err) {
                deferred.reject(err);
            } else {
                users.find({_id: userId}, function(err, doc) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(doc);
                        console.log(doc);
                    }
                });
            }
        });
        return deferred.promise;
    }

    function deleteUser(userId) {
        console.log(userId);
        var deferred = q.defer();

        users.remove({_id: userId}, function(err,doc) {
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function findUserByUsername(username) {
        var deferred = q.defer();
        users.findOne({username: username}, function(err, doc) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(doc);
                    }
                });
        return deferred.promise;
    }

    function findUserByCredentials(username, password) {
        var deferred = q.defer();
        users.findOne(
            //first argument is predicate
            {
                username: username,
                password: password
            },

            //doc is unique instance matches predicate
            function (err, doc) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(doc);
                }
            });
        return deferred.promise;
    }
};