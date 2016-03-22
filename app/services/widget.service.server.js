module.exports = function (app, applicationModel) {

    app.post ("/api/application/:applicationId/page/:pageId/widget", createWidget);

    var widgetModel = require("../models/widget/widget.model.server.js")(applicationModel);

    function createWidget(req, res) {
        var applicationId = req.params.applicationId;
        var pageId = req.params.pageId;
        var widgetType = req.query.widgetType;
        widgetModel
            .createWidget(applicationId, pageId, widgetType);
    }
}