var mongoose = require("mongoose");

module.exports = function () {

    var HeaderSchema = mongoose.Schema({
        name: String,
        text: String,
        size: Number
    });

    return HeaderSchema;
};