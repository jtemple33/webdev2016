(function () {
    angular
        .module("238Hem")
        .factory("ProductsService", ProductsService);

    function ProductsService($http) {
        var api = {
            getProducts: getProducts
        };

        return api;

        function getProducts() {
            return $http.get("/api/project/products")
        }


    }
})();
