module.exports = function (app, pageModel) {
    app.post   ("/api/application/:applicationId/page", createPage);

    function createPage(req, res) {
        var applicationId = req.params.applicationId;
        var page = req.body;
        pageModel.createPage(applicationId, page);
    }
}