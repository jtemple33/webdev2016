module.exports = function (app, applicationModel) {
    app.post ("/api/application/:applicationId/page", createPage);
    app.get  ("/api/application/:applicationId/page", findPagesForApplication);
    app.get  ("/api/application/:applicationId/page/:pageId", findPage);

    var pageModel   = require("../models/page/page.model.server.js")(applicationModel);

    // 3.0
    function findPage(req, res) {
        var applicationId = req.params.applicationId;
        var pageId = req.params.pageId;
        pageModel
            .findPage(applicationId, pageId)
            .then(
                function(page) {
                    res.json(page);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

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