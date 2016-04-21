(function(){
    angular
        .module("238Hem")
        .controller("adminEditProductsController", adminEditProductsController);

    function adminEditProductsController($routeParams, $scope, $rootScope, ReviewService, UserService, ProductsService, $location) {
        var productId = $routeParams["productId"];

        $scope.addReview = addReview;
        $scope.updateProduct = updateProduct;
        $scope.deleteReview = deleteReview;
        $scope.addReview = addReview;

        function init() {
            getReviews();
            getProductDetails();
        }

        init();

        function updateProduct(_id, product) {
            ProductsService
                .updateProduct(_id, product)
                .then(function (response) {
                    alert("Changes successfully saved!");
                    init();
                })
        }


        function getReviews() {
            ReviewService
                .getReviewsByProductId(productId)
                .then(function (response) {
                    $scope.reviews = response.data;
                    console.log(response.data);
                })
        }

        function deleteReview(review) {
            ReviewService
                .deleteReview(review)
                .then(function (response) {
                    init();
                })
        }


        function getProductDetails() {
            ProductsService
                .getProduct(productId)
                .then(function (response) {
                    $scope.product = response.data;
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