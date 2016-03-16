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
        console.log (username);
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