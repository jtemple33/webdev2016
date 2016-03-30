var mongoose = require("mongoose");

module.exports = function () {

    var PageSchema = require("../page/page.schema.server.js")();

    var ApplicationSchema = mongoose.Schema({
        developerUsername: String,
        name: {type: String, default: "Application Name"},
        description: String,
        dateCreated: {type: Date, default: Date.now},
        pages: [PageSchema]
    }, {collection: "application"});

    return ApplicationSchema;
};
