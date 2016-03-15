var mongoose = require("mongoose");

module.exports = function () {
    var DeveloperSchema = mongoose.Schema({
        username: String,
        password: String,
        email: String,
        firstName: String,
        lastName: String
    }, {collection: 'developer'});
    return DeveloperSchema;
};
