(function(){
    angular
        .module("238Hem")
        .controller("ProductDetailsController", ProductDetailsController);

    function ProductDetailsController($routeParams, $scope, $rootScope, ReviewService, UserService, ProductsService, $location) {
    var productId = $routeParams["productId"];

    $scope.addReview = addReview;
    $scope.addToCart = addToCart;

    (function init() {
        getProductDetails();
        getReviews();
    })();

   function getReviews() {
       ReviewService
           .getReviewsByProductId(productId)
           .then(function (response) {
               $scope.reviews = response.data;
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

    function getProductDetails() {
        console.log(productId);
        ProductsService
            .getProduct(productId)
            .then(function (response) {
                $scope.product = response.data;
                console.log(response.data);
            })
    }

        function addReview(review) {
            var date = new Date();
            date = date.getMonth() + 1 +
                "/" +  date.getDate() +
            "/" +  date.getFullYear();
            review.productId = productId;
            review.date = date;
            if($rootScope.currentUser) {
                review.userId = $rootScope.currentUser._id;
            }
            ReviewService
                .addReview(review);
            getReviews();
            $scope.newReview = null;
        }

}


})();