

module.exports = function(app, productModel) {

    app.get("/api/project/product/:_id", getProduct);
    app.get("/api/project/products", getProducts);
    app.put("/api/project/deleteProduct", deleteProduct);
    app.post("/api/project/addProduct", addProduct);
    app.put("/api/project/updateProduct/:_id", updateProduct);

    function getProduct(req, res) {
        var _id = req.params._id;
        console.log(_id);
        productModel
            .getProduct(_id)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err) {
                    res.status(400).send(err);
                }

            );
    }

    function getProducts(req, res) {
        //res.json(productModel.getProducts());
        productModel
            .getProducts()
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

    function deleteProduct(req, res) {
        //res.json(productModel.getProducts());
        var productId = req.body;
        productModel
            .deleteProduct(productId)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

    function addProduct(req, res) {
        //res.json(productModel.getProducts());
        var product = req.body;
        productModel
            .addProduct(product)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

    function updateProduct(req, res) {
        var product = req.body;
        var _id = req.params._id;

        console.log(_id);
        console.log(product);

        productModel
            .updateProduct(_id, product)
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