var mongoose = require("mongoose");
var q = require("q");
module.exports = function () {
    var ApplicationSchema = require("./application.schema.server.js")();
    var Application = mongoose.model("Application", ApplicationSchema);

    var api = {
        createApplication: createApplication
    };
    return api;

    function createApplication (application) {
        var deferred = q.defer();
        Application.create (application,
            function (err, application) {

        });
        return deferred.promise;
    }
};