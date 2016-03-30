

module.exports = function(app, productModel) {

    app.get("/api/project/products", getProducts);

    function getProducts(req, res) {
        res.json(productModel.getProducts());
    }

};