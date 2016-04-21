
(function () {
    angular
        .module("238Hem")
        .controller("CartController", CartController);

    function CartController($scope, $routeParams, UserService, $rootScope) {

        $scope.removeFromCart = removeFromCart;

        function init() {
            $rootScope.products = $rootScope.currentUser.cart;
        }

        init();

        function removeFromCart(product) {
            cart = $rootScope.currentUser.cart;
            console.log(cart);
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].productId == product.productId) {
                    cart.splice(i, 1);
                    break;
                }
            }
            console.log(cart);
            $rootScope.currentUser.cart = cart;
            //console.log($rootScope.currentUser._id);
            //console.log($rootScope.currentUser);
            UserService
                .updateUser($rootScope.currentUser._id, $rootScope.currentUser)
                .then(function (res) {
                        alert("Successfully removed item to your cart!");
                        init();
                    }
                )
        }

    }
})();