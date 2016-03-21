module.exports = function (app, applicationModel) {

    app.post ("/api/application/:applicationId/page/:pageId/widget", createWidget);

    function createWidget(req, res) {
        var widgetType = req.query.widgetType;
        console.log(widgetType);
    }
}