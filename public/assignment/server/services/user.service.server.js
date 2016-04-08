
module.exports = function(app, userModel) {


    app.post("/api/assignment/user", createUser);
    app.get("/api/assignment/user", findAllUsers);
    app.get("/api/assignment/user/:id", findUserById);
    app.get("/api/assignment/user/username/:username", findUserByUsername);
    app.get("/api/assignment/user/username/:username/password/:password", findUserByCredentials);
    app.put("/api/assignment/user/:id", updateUser);
    app.delete("/api/assignment/user/:id", deleteUser);

    function createUser(req, res) {
        var newUser = req.body;
        //res.json(userModel.createUser(newUser));
        userModel
            .createUser(newUser)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(error){
                    res.status(400).send(error);
                }
            );
    }

    function updateUser(req, res) {
        var user = req.body;
        //res.json(userModel.updateUser(user._id, user));
        userModel
            .updateUser(user._id, user)
            .then(
                // return user if promise resolved
                function(doc) {
                    res.json(doc);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function findAllUsers(req, res) {
        //res.json(userModel.findAllUsers());
        userModel
            .findAllUsers()
            .then(
                // return user if promise resolved
                function(doc) {
                    res.json(doc);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }


    function findUserById(req, res) {
        var userId = req.params._id;
        //res.json(userModel.findUserById(userId));
        userModel
            .findUserById(userId)
            .then(
                // return user if promise resolved
                function(doc) {
                    res.json(doc);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function findUserByUsername(req, res) {
        var username = req.params.username;
        //res.json(userModel.findUserByUsername(username));
        userModel
            .findUserByUsername(username)
            .then(
                // return user if promise resolved
                function(doc) {
                    res.json(doc);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function findUserByCredentials(req, res) {
        var username = req.params.username;
        var password = req.params.password;
        //res.json(userModel.findUserByCredentials(username, password));

        userModel
            .findUserByCredentials(username, password)
            .then(
                // return user if promise resolved
                function(doc) {
                    res.json(doc);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function deleteUser(req, res) {
        var userId = req.params._id;
        //res.json(userModel.deleteUser(userId));
        userModel
            .deleteUser(userId)
            .then(
                // return user if promise resolved
                function(doc) {
                    res.json(doc);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

};