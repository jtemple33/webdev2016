var passport      = require('passport');
var LocalStrategy    = require('passport-local').Strategy;

module.exports = function(app, userModel) {

    var auth = authorized;

    app.post('/api/project/login', passport.authenticate('project'), projectLogin);
    app.post('/api/project/logout',         logout);
    app.post('/api/project/register',       register);
    app.get   ('/api/project/loggedin',       loggedin);


    app.post("/api/project/createUser", createUser);
    app.get("/api/project/user", findAllUsers);
    app.get("/api/project/user/:id", findUserById);
    app.get("/api/project/user/username/:username", findUserByUsername);
    app.get("/api/project/user/username/:username/password/:password", findUserByCredentials);
    app.put("/api/project/user/:id", updateUser);
    app.delete("/api/project/user/:id", deleteUser);

    function authorized (req, res, next) {
        if (!req.isAuthenticated()) {
            res.send(401);
        } else {
            next();
        }
    }

    function isAdmin(user) {
        if(user.roles.indexOf("admin") > 0) {
            return true
        }
        return false;
    }

    passport.use('project', new LocalStrategy(projectLocalStrategy));

    function projectLocalStrategy(username, password, done) {
        userModel
            .findUserByCredentials(username,password)
            .then(
                function(user) {
                    if (!user) { return done(null, false); }
                    return done(null, user);
                },
                function(err) {
                    if (err) { return done(err); }
                }
            );
    }

    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        userModel
            .findUserById(user._id)
            .then(
                function(user){
                    done(null, user);
                },
                function(err){
                    done(err, null);
                }
            );
    }

    function logout(req, res) {
        req.logOut();
        res.send(200);
    }

    function projectLogin(req, res) {
        var user = req.user;
        res.json(user);
    }

    function loggedin(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    function register(req, res) {
        var newUser = req.body;

        userModel
            .findUserByUsername(newUser.username)
            .then(
                function(user){
                    if(user) {
                        res.json(null);
                    } else {
                        return userModel.createUser(newUser);
                    }
                },
                function(err){
                    res.status(400).send(err);
                }
            )
            .then(
                function(user){
                    console.log(user);
                    if(user){
                        req.login(user, function(err) {
                            if(err) {
                                res.status(400).send(err);
                            } else {
                                res.json(user);
                            }
                        });
                    }
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

    function createUser(req, res) {
        var newUser = req.body;
        userModel
            .createUser(newUser)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

    function updateUser(req, res) {
        var user = req.body;
        console.log(user);
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
        console.log(username);
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
        console.log(username);
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
        var userId = req.params.id;
        console.log(userId);
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