
module.exports = function(app, userModel) {


    app.post("/api/project/user", createUser);
    app.get("/api/project/user", findAllUsers);
    app.get("/api/project/user/:id", findUserById);
    app.get("/api/project/user/username/:username", findUserByUsername);
    app.get("/api/project/user/username/:username/password/:password", findUserByCredentials);
    app.put("/api/project/user/:id", updateUser);
    app.delete("/api/project/user/:id", deleteUser);

    function createUser(req, res) {
        var newUser = req.body;
        res.json(userModel.createUser(newUser));
    }

    function updateUser(req, res) {
        var user = req.body;
        res.json(userModel.updateUser(user._id, user));
    }

    function findAllUsers(req, res) {
        res.json(userModel.findAllUsers());
    }

    function findUserById(req, res) {
        var userId = req.params._id;
        res.json(userModel.findUserById(userId));
    }

    function findUserByUsername(req, res) {
        var username = req.params.username;
        res.json(userModel.findUserByUsername(username));
    }

    function findUserByCredentials(req, res) {
        var username = req.params.username;
        var password = req.params.password;
        res.json(userModel.findUserByCredentials(username, password));
    }

    function deleteUser(req, res) {
        var userId = req.params._id;
        res.json(userModel.deleteUser(userId));
    }


};