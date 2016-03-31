
var products = require("./products.json");

module.exports = function() {
    var api = {
        getProductDetails: getProductDetails
    };

    return api;

    function getProductDetails(productId) {
        for (var i = 0; i < products.length; i++) {
            if (products[i].productId == productId) {
                return products[i];
            }
        }
    }
};