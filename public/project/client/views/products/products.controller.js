
(function () {
    angular
        .module("238Hem")
        .controller("ProductController", ProductController);

    function ProductController($scope, $rootScope, $location, UserService, $routeParams, ProductsService) {

        $scope.addToCart = addToCart;

        init();

        function init() {
            ProductsService
                .getProducts()
                .then(function (response) {
                    console.log(response.data);
                    $scope.products = response.data;
                })

        }

        function addToCart(product) {
            if($rootScope.currentUser == null) {
                alert('You need to log in.');
                $location.url('/login');
            } else {
                $rootScope.currentUser.cart.push(product);
                UserService
                    .updateUser($rootScope.currentUser._id, $rootScope.currentUser)
                    .then(function(res){
                            if (window.confirm('Click "ok" to view your cart. Cancel to continue shopping'))
                            {
                                window.location.href='#/cart';
                            }
                        }
                    )
            }
        }


    }
})();