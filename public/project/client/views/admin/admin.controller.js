(function()
{
    angular
        .module("238Hem")
        .controller("AdminController", AdminController);

    function AdminController($scope, ProductsService)
    {
        $scope.remove = remove;
        $scope.update = update;
        $scope.add    = add;
        $scope.select = select;

        function init() {
            ProductsService
                .getProducts()
                .then(handleSuccess, handleError);
        }
        init();

        function remove(product){
            ProductsService
                .deleteProduct(product)
                .then(function() {
                    init();
                });
        }

        function update(product){
            ProductsService
                .updateProduct(product._id, product)
                .then(function() {
                    init();
                });
        }

        function add(product){
            ProductsService
                .addProduct(product)
                .then(function() {
                    init();
                });
        }

        function select(user) {
            $scope.user = angular.copy(user);
        }

        function handleSuccess(response) {
            $scope.products = response.data;
        }

        function handleError(error) {
            $scope.error = error;
        }
    }
})();