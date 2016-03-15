var mongoose = require("mongoose");

module.exports = function (db) {
    var DeveloperSchema = require("./developer.schema.server.js")();
    var Developer = mongoose.model("Developer", DeveloperSchema);

    var api = {
        createDeveloper: createDeveloper
    };
    return api;

    function createDeveloper (developer) {

    }
};