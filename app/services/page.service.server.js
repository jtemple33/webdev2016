module.exports = function (app, applicationModel) {
    app.post   ("/api/application/:applicationId/page", createPage);
    app.get    ("/api/application/:applicationId/page", findPagesForApplication);
    app.get    ("/api/application/:applicationId/page/:pageId", findPage);
    app.delete ("/api/application/:applicationId/page/:pageId", removePage);
    app.put    ("/api/application/:applicationId/page/:pageId", updatePage);
    app.put    ("/api/application/:applicationId/page", updatePages);

    var pageModel   = require("../models/page/page.model.server.js")(applicationModel);

    function updatePages (req, res) {
        var applicationId = req.params.applicationId;
        var startIndex = req.query.startIndex;
        var endIndex = req.query.endIndex;

        if(startIndex && endIndex) {
            pageModel
                .sortPage(applicationId, startIndex, endIndex)
                .then(
                    function(stat) {
                        return pageModel.findPagesForApplication(applicationId);
                    },
                    function(err) {
                        res.status(400).send(err);
                    }
                )
                .then(
                    function(application) {
                        res.json(application.pages);
                    },
                    function(err) {
                        res.status(400).send(err);
                    }
                );
        }
    }

    function updatePage (req, res) {
        var applicationId = req.params.applicationId;
        var page = req.body;
        pageModel
            .updatePage(applicationId, page)
            .then(
                function(stat) {
                    res.send(200);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function removePage (req, res) {
        var applicationId = req.params.applicationId;
        var pageId = req.params.pageId;
        pageModel
            .removePage(applicationId, pageId)
            .then(
                function(stat) {
                    res.send(200);
                },
                function(err) {
                    res.status(400).send(err);
                }
            )
    }

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