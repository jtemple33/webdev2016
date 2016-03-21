var mongoose = require("mongoose");

module.exports = function () {

    var ButtonSchema = mongoose.Schema({
        name: String,
        text: String,
        url: String,
        pageId: String,
        icon: String
    });

    return ButtonSchema;
};