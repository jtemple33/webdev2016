
var products = require("./products.json");

module.exports = function() {
    var api = {
        getProducts: getProducts
    };

    return api;

    function getProducts() {
        return products;
    }
};