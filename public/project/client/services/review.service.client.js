(function () {
    angular
        .module("238Hem")
        .factory("ReviewService", ReviewService);

    function ReviewService($http) {

        var api = {
            getReviewsByProductId: getReviewsByProductId,
            getReviewsByUserId: getReviewsByUserId,
            addReview: addReview,
            deleteReview: deleteReview
        };

        return api;

        function getReviewsByProductId(productId) {
            return $http.get("/api/project/reviews/" + productId);
        }

        function addReview(review) {
            return $http.post("/api/project/reviews", review);
        }

        function getReviewsByUserId(userId) {
            console.log(userId);
            console.log("I ran service!");
            return $http.get("/api/project/userReviews/" + userId);

        }

        function deleteReview(review) {
            return $http.put("/api/project/deleteReview/", review);
        }
    }


})();