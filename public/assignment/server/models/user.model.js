var users = require('./user.mock.json');
var mongoose = require("mongoose");
var q = require("q");


module.exports = function(db) {

    // load user schema
    var UserSchema = require('./user.schema.server.js')(mongoose);

    // create user model from schema
    var MongooseUserModel = mongoose.model("User", UserSchema);

    var service = {createUser: createUser,
                    findAllUser: findAllUser,
                    findUserById: findUserById,
                    updateUser: updateUser,
                    deleteUser: deleteUser,
                    findUserByUsername:findUserByUsername,
                    findUserByCredentials:findUserByCredentials};

    return service;

    function createUser(user) {

        // use q to defer the response
        var deferred = q.defer();

        //users.push(user);
        //return user;
        delete user.verifiedPassword;
        user.emails = [user.email];
        MongooseUserModel.create(user, function(err, doc) {
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

    function findAllUser() {
        //return users;
        return MongooseUserModel.find();
    }

    function findUserById(id) {
        /*var result;
        for (var i = 0; i < users.length; i++) {
            var suspect = users[i];
            if (user._id == id) {
                result = suspect;
                break;
            }
        }
        return result;*/

        var deferred = q.defer();
        MongooseUserModel.findById(id, function( err, doc) {
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
        //target = findUserIndexById(userId);
        //users[target] = user;
        //return users;
        var deferred = q.defer();
        MongooseUserModel.update({_id: userId}, {$set: user}, function(err, doc) {
                if (err) {
                    deferred.reject(err);
                } else {
                    MongooseUserModel.find({_id: userId}, function(err, doc) {
                        if (err) {
                            deferred.reject(err);
                        } else {
                            deferred.resolve(doc);
                        }
                    });
                }
            });
        return deferred.promise;
    }

    function deleteUser(userId) {
        target = findUserIndexById(userId);
        users.splice(target,1);
        return users;
    }

    function findUserByUsername(username) {
        /*for (var i = 0; i < users.length; i++) {
            var user = users[i];
            if (user.username == username) {
                return user;
            }
        }*/

        var deferred = q.defer();
        MongooseUserModel
            .findOne(
                //first argument is predicate
                {username: username},
                function(err, doc) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(doc);
                    }
                });
        return deferred.promise;

    }

    function findUserByCredentials(username, password) {
        /*for (var i = 0; i < users.length; i++) {
            var user = users[i];
            if (user.username == username && user.password == password) {
                return user;
            }
        }*/

        var deferred = q.defer();
        MongooseUserModel
            .findOne(
            //first argument is predicate
            {username: username,
             password: password},

            //doc is unique instance matches predicate
            function(err, doc) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(doc);
                }
            });
        return deferred.promise;

    }


};