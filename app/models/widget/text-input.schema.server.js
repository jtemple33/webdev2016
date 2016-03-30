var mongoose = require("mongoose");

module.exports = function () {

    var TextInputSchema = mongoose.Schema({
        name: String,
        text: String,
        placeholder: String,
        rows: {type: Number, default: 1}
    });

    return TextInputSchema;
};