
module.exports = function(app) {

    var userModel = require("./models/user.model.js")();
    var productModel = require("./models/products.js")();

    var UserService = require("./services/user.services.server.js")(app, userModel);
    var ShirtService = require("./services/products.services.server.js")(app, productModel);
};