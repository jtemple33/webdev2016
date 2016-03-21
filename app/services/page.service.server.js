module.exports = function (app) {
    app.post   ("/api/application/:applicationId/page", createPage);

    function createPage(req, res) {
        var applicationId = req.params.applicationId;
        var page = req.body;
        console.log(page);
    }
}