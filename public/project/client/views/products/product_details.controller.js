(function(){
    angular
        .module("238Hem")
        .controller("ProductDetailsController", ProductDetailsController);

    function ProductDetailsController($routeParams, $scope, $rootScope, ReviewService, ProductDetailsService) {
    var productId = $routeParams["productId"];

    $scope.addReview = addReview;

    (function init() {
        getReviews();
        getProductDetails();
    })();

   function getReviews() {
       ReviewService
           .getReviewsByProductId(productId)
           .then(function (response) {
               $scope.reviews = response.data;
           })
   }

    function getProductDetails() {
        ProductDetailsService
            .getProductDetails(productId)
            .then(function (response) {
                $scope.product = response.data;
            })
    }


        function addReview(review) {
            var date = new Date();
            date = date.getMonth() + 1 +
                "/" +  date.getDate() +
            "/" +  date.getFullYear();
            review._id = productId;
            review.date = date;
            ReviewService
                .addReview(review);
            getReviews();
        }

}


})();