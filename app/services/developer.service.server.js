module.exports = function (app, developerModel) {
    app.post ("/api/developer", createDeveloper);
    app.get ("/api/developer", findAllDevelopers);

    function findAllDevelopers (req, res) {
        developerModel
            .findAllDevelopers ();
    }

    function createDeveloper (req, res) {
        var developer = req.body;
        developerModel
            .createDeveloper (developer)
            .then (
                function (developer) {
                    res.json (developer);
                },
                function (err) {
                    res.status (400).send ( err);
                }
            );
    }
}