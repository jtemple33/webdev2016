var mongoose = require("mongoose");
module.exports = function () {
    var ApplicationSchema = require("./application.schema.server.js")();
    var Application = mongoose.model("Application", ApplicationSchema);

    var api = {
        createApplication: createApplication
    };
    return api;

    function createApplication (application) {

    }
};