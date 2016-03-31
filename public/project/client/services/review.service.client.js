(function () {
    angular
        .module("238Hem")
        .factory("ReviewService", ReviewService);

    function ReviewService($http) {

        var api = {
            getReviewsByProductId: getReviewsByProductId,
            addReview: addReview
        };

        return api;

        function getReviewsByProductId(productId) {
            return $http.get("/api/project/reviews/" + productId);
        }

        function addReview(review) {
            return $http.post("/api/project/reviews", review);
        }
    }

})();