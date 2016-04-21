

module.exports = function(app, productDetailsModel) {

    app.get("/api/project/product/:productId/details", getProductDetails);

    function getProductDetails(req, res) {
        var productId = req.params.productId;
        res.json(productDetailsModel.getProductDetails(productId));
        productModel
            .getProductDetails()
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

};