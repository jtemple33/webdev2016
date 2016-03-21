var mongoose = require("mongoose");

module.exports = function () {

    var HeaderSchema    = require("./header.schema.server.js")
    var LabelSchema     = require("./label.schema.server.js")
    var TextInputSchema = require("./text-input.schema.server.js")
    var LinkSchema      = require("./link.schema.server.js")
    var ButtonSchema    = require("./button.schema.server.js")

    var WidgetSchema = mongoose.Schema({
        name: String,
        title: String,
        header: HeaderSchema,
        label: LabelSchema,
        textInput: TextInputSchema,
        link: LinkSchema,
        button: ButtonSchema
    });

    return PageSchema;
};