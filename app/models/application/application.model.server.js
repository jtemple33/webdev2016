var mongoose = require("mongoose");
var q = require("q");
module.exports = function () {
    var ApplicationSchema = require("./application.schema.server.js")();
    var Application = mongoose.model("Application", ApplicationSchema);

    var api = {
        createApplication: createApplication,
        findApplicationsForUsername: findApplicationsForUsername,
        findApplicationById: findApplicationById
    };
    return api;

    function findApplicationById (applicationId) {
        Application
            .findById (
                applicationId,
                function (err, application) {

                }
            );
    }

    function findApplicationsForUsername (username) {
        var deferred = q.defer();
        Application
            .find(
                {developerUsername: username},
                function (err, applications) {
                    if (!err) {
                        deferred.resolve (applications);
                    } else {
                        deferred.reject (err);
                    }
                }
            );
        return deferred.promise;
    }

    function createApplication (application) {
        var deferred = q.defer();
        Application.create (application,
            function (err, application) {
                if (!err) {
                    deferred.resolve(application);
                } else {
                    deferred.reject(err);
                }
        });
        return deferred.promise;
    }
};