
module.exports = function(app) {

    var userModel = require("./models/user.model.js")();

    var UserService = require("./services/user.service.server.js")(app, userModel);


};