module.exports = function (app, pageModel) {
    app.post   ("/api/application/:applicationId/page", createPage);

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