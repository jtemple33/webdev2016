var mongoose = require("mongoose");
var q = require("q");

module.exports = function (db) {
    var DeveloperSchema = require("./developer.schema.server.js")();
    var Developer = mongoose.model("Developer", DeveloperSchema);

    var api = {
        createDeveloper: createDeveloper,
        findAllDevelopers: findAllDevelopers,
        findDeveloperByUsername: findDeveloperByUsername
    };
    return api;

    function findDeveloperByUsername (username) {
        var deferred = q.defer ();
        Developer
            .findOne (
                {username: username},
                function (err, developer) {
                    console.log (developer);
                }
            );
        return deferred.promise;
    }

    function findAllDevelopers () {
        var deferred = q.defer ();
        Developer.find (
            function (err, developers) {
                if (!err) {
                    deferred.resolve (developers);
                } else {
                    deferred.reject (err);
                }
            }
        );
        return deferred.promise;
    }

    function createDeveloper (developer) {
        var deferred = q.defer();
        Developer.create(developer, function (err, doc) {
            if (err) {
                deferred.reject (err);
            } else {
                deferred.resolve (doc);
            }
        });
        return deferred.promise;
    }
};