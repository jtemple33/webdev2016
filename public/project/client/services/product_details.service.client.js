(function () {
    angular
        .module("238Hem")
        .factory("ProductDetailsService", ProductDetailsService);

    function ProductDetailsService($http) {
        var api = {
            getProductDetails: getProductDetails
        };

        return api;

        function getProductDetails(productId) {
            return $http.get("/api/project/product/" + productId + "/details")
        }


    }
})();
