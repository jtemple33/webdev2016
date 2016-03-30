var mongoose = require("mongoose");

module.exports = function () {

    var LabelSchema = mongoose.Schema({
        name: String,
        text: String
    });

    return LabelSchema;
};