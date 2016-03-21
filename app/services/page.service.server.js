module.exports = function (app, applicationModel) {
    app.post ("/api/application/:applicationId/page", createPage);
    app.get  ("/api/application/:applicationId/page", findPagesForApplication);

    // 4.0
    var pageModel   = require("../models/page/page.model.server.js")(applicationModel);

    function findPagesForApplication(req, res) {
        var applicationId = req.params.applicationId;
        pageModel
            .findPagesForApplication(applicationId)
            .then(
                function(application) {
                    res.json(application.pages);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function createPage(req, res) {
        var applicationId = req.params.applicationId;
        var page = req.body;
        pageModel
            .createPage(applicationId, page)
            .then(
                function(application) {
                    res.json(application);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }
}