module.exports = function (app, developerModel) {
    app.post ("/api/developer", createDeveloper);
    app.get ("/api/developer", findAllDevelopers);
    app.get ("/api/developer/:username", findDeveloperByUsername);
    app.put ("/api/developer/:username", updateDeveloper);
    app.delete ("/api/developer/:username", deleteDeveloper);

    function deleteDeveloper (req, res) {
        var username = req.params.username;
        developerModel
            .deleteDeveloper (username)
            .then (
                function (stats) {
                    res.send(200);
                }
            );
    }

    function updateDeveloper (req, res) {
        var username = req.params.username;
        var developer = req.body;
        developerModel
            .updateDeveloper (username, developer)
            .then (
                function (stats) {
                    res.send(200);
                },
                function (err) {
                    res.status(400).send(err);
                }
            );
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