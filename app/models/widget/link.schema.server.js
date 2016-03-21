var mongoose = require("mongoose");

module.exports = function () {

    var LinkSchema = mongoose.Schema({
        name: String,
        text: String,
        url: String,
        pageId: String,
        icon: String
    });

    return LinkSchema;
};