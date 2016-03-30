var mongoose = require("mongoose");

module.exports = function () {

    var WidgetSchema = require("../widget/widget.schema.server.js");

    var PageSchema = mongoose.Schema({
        name: String,
        title: String,
        widgets: [{
            widgetType: String,
            name: String,
            title: String,
            text: {type:String, default:'Text'},
            header: {
                size: Number
            },
            button: {
                url: String,
                pageId: String,
                icon: String
            },
            textInput: {
                placeholder: String,
                rows: Number
            }
        }],
        dateCreated: {type: Date, default: Date.now}
    });

    return PageSchema;
};