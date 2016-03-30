(function() {
    angular
        .module("238Hem")
        .factory("ReviewService", ReviewService);

    function ReviewService($http) {


        var api = {
            allReviewsByProductId: allReviewsByProductId(),
            addReview: addReview
        };

        return api;

        function allReviewsByProductId(productId) {
            return $http.get("/api/project/reviews/" + productId);
        }

        function addReview(review) {
            var date = new Date();
            var newReview =
                {"_id": reviews[0]+1,
                "date": (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear(),
                "name": review.name,
                "Comments": review.Comments,
                "rating": review.rating};
            reviews.splice(0,0,newReview);
        }
    }

})();