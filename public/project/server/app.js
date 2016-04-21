
module.exports = function(app, mongoose) {

    var userSchema = require("./models/user.schema.server")(mongoose);
    var userModel = require("./models/user.model.js")(mongoose, userSchema);
    var UserService = require("./services/user.services.server.js")(app, userModel);

    var productSchema = require("./models/products.schema.server")(mongoose);
    var productModel = require("./models/products.model.js")(mongoose, productSchema);
    var ProductsService = require("./services/products.services.server.js")(app, productModel);

    //var productDetailsModel = require("./models/product_details.model.js")(mongoose, productSchema);
    //var ProductDetailsService = require("./services/product_details.services.server.js")(app, productDetailsModel);

    var reviewSchema = require("./models/reviews.schema.server")(mongoose);
    var reviewModel = require("./models/reviews.model.js")(mongoose, reviewSchema);
    var ReviewService = require("./services/reviews.services.server.js")(app, reviewModel);

};