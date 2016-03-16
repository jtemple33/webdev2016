module.exports = function (app, developerModel) {
    app.post ("/api/developer/:username/application", createApplication);

    function createApplication (req, res) {
        var username = req.params.username;
        var application = req.body;
    }
}