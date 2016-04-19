var passport      = require('passport');
var LocalStrategy    = require('passport-local').Strategy;


module.exports = function(app, userModel) {

    var auth = authorized;

    app.post('/api/login', passport.authenticate('local'), login);
    app.post('/api/logout',         logout);
    app.post('/api/register',       register);
    app.get   ('/api/loggedin',       loggedin);
    app.post("/api/assignment/user", createUser);
    app.get("/api/assignment/user", findAllUsers);
    app.get("/api/assignment/user/:id", findUserById);
    app.get("/api/assignment/user/username/:username", findUserByUsername);
    app.get("/api/assignment/user/username/:username/password/:password", findUserByCredentials);
    app.put("/api/assignment/user/:id", updateUser);
    app.delete("/api/assignment/user/:id", deleteUser);

    function authorized (req, res, next) {
        if (!req.isAuthenticated()) {
            res.send(401);
        } else {
            next();
        }
    }

    passport.use(new LocalStrategy(localStrategy));

    function localStrategy(username, password, done) {
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

    function login(req, res) {
        var user = req.user;
        res.json(user);
    }

    function loggedin(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    function register(req, res) {
        var newUser = req.body;
        //newUser.roles = ['student'];

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
        console.log(newUser);
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
        var userId = req.params.id;
        //res.json(userModel.deleteUser(userId));
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