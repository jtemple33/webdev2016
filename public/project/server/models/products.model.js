
var q = require("q");

module.exports = function(mongoose, productSchema) {

    var products = mongoose.model("project.Products", productSchema);


    var api = {
        getProduct: getProduct,
        getProducts: getProducts,
        deleteProduct: deleteProduct,
        addProduct: addProduct,
        updateProduct: updateProduct
    };

    return api;

    function getProduct(_id) {
        console.log(_id);
        var deferred = q.defer();

        products.findById(_id, function(err, doc) {
            if (err) {
                //rejects promise if error
                deferred.reject(err);
            } else {
                //resolve promise
                deferred.resolve(doc);
                console.log(doc);
            }

        });
        // return a promise
        return deferred.promise;
    }

    function getProducts() {
        var deferred = q.defer();

        products.find(function(err, doc) {
            if (err) {
                //rejects promise if error
                deferred.reject(err);
            } else {
                //resolve promise
                deferred.resolve(doc);
                console.log(doc);
            }

        });
        // return a promise
        return deferred.promise;
    }

    function deleteProduct(productId) {
        var deferred = q.defer();

        products.remove({_id: productId}, function(err,doc) {
            if (err) {
                //rejects promise if error
                deferred.reject(err);
            } else {
                //resolve promise
                deferred.resolve(doc);
            }

        });
        // return a promise
        return deferred.promise;
    }

    function addProduct(product) {
        var deferred = q.defer();

        products.create(product, function(err, doc) {
            if (err) {
                //rejects promise if error
                deferred.reject(err);
            } else {
                //resolve promise
                deferred.resolve(doc);
            }

        });
        // return a promise
        return deferred.promise;
    }

    function updateProduct(productId, product) {
        var deferred = q.defer();

        products.update({_id: productId}, {$set: product}, function(err, doc) {
            if (err) {
                deferred.reject(err);
            } else {
                products.find({_id: productId}, function(err, doc) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(doc);
                    }
                });
            }
        });
        return deferred.promise;
    }
};