(function () {
    angular
        .module("238Hem")
        .factory("ProductsService", ProductsService);

    function ProductsService($http) {
        var api = {
            getProduct: getProduct,
            getProducts: getProducts,
            deleteProduct: deleteProduct,
            addProduct: addProduct,
            updateProduct: updateProduct
        };

        return api;

        function getProduct(_id) {
            return $http.get("/api/project/product/" +_id);
        }

        function getProducts() {
            return $http.get("/api/project/products")
        }
        function deleteProduct(productId) {
            return $http.put("/api/project/deleteProduct", productId);
        }
        function addProduct(product) {
            return $http.post("/api/project/addProduct", product);

        }
        function updateProduct(_id, product) {
            return $http.put("/api/project/updateProduct/" +_id, product);


        }

    }
})();
