
(function () {
    angular
        .module("238Hem")
        .controller("ProductController", ProductController);

    function ProductController($scope, $routeParams, ProductsService) {

        function init() {
            ProductsService
                .getProducts()
                .then(function (response) {
                    console.log(response.data);
                    $scope.products = response.data;
                })

        }

        init();

    }
})();