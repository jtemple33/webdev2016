module.exports = function (app, developerModel) {
    app.post ("/api/developer", createDeveloper);
    app.get ("/api/developer", findAllDevelopers);
    app.get ("/api/developer/:username", findDeveloperByUsername);
    app.put ("/api/developer/:username", updateDeveloper);

    function updateDeveloper (req, res) {

    }

    function findDeveloperByUsername (req, res) {
        developerModel
            .findDeveloperByUsername (req.params.username)
            .then (
                function (developer) {
                    res.json (developer);
                },
                function (err) {
                    res.status(400).send(err);
                }
            );
    }

    function findAllDevelopers (req, res) {
        developerModel
            .findAllDevelopers ()
            .then (
                function (developers) {
                    res.json (developers);
                },
                function (err) {
                    res.status(400).send(err);
                }
            );
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