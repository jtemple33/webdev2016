
(function () {
    angular
        .module("238Hem")
        .controller("ProductController", ProductController);

    function ProductController($scope, $routeParams, ShirtService) {

        function init() {
            ShirtService
                .getProducts()
                .then(function (response) {
                    console.log(response.data);
                    $scope.products = response.data;
                })

        }

        init();

    }
})();