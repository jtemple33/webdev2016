var mongoose = require("mongoose");

module.exports = function () {

    var WidgetSchema = require("../widget/widget.schema.server.js");

    var PageSchema = mongoose.Schema({
        name: String,
        title: String,
        widgets: [WidgetSchema],
        dateCreated: {type: Date, default: Date.now}
    });

    return PageSchema;
};