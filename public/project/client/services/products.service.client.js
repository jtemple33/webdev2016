(function () {
    angular
        .module("238Hem")
        .factory("ShirtService", ShirtService);

    function ShirtService($http) {
        var api = {
            getProducts: getProducts
        };

        return api;

        function getProducts() {
            return $http.get("/api/project/products")
        }


    }
})();
