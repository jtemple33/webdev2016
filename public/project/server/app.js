
module.exports = function(app) {

    var userModel = require("./models/user.model.js")();
    var productModel = require("./models/products.model.js")();
    var productDetailsModel = require("./models/product_details.model.js")();
    var reviewModel = require("./models/reviews.model.js")();

    var UserService = require("./services/user.services.server.js")(app, userModel);
    var ProductsService = require("./services/products.services.server.js")(app, productModel);
    var ProductDetailsService = require("./services/product_details.services.server.js")(app, productDetailsModel);
    var ReviewService = require("./services/reviews.services.server.js")(app, reviewModel);
};