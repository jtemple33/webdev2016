
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