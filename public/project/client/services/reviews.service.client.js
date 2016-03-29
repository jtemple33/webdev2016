(function() {
    angular
        .module("238Hem")
        .factory("ReviewService", ReviewService);

    function ReviewService() {
        var reviews = [];

        reviews = [
            {"_id": "000", "date": "3/15/2016", "name": "Alex", "Comments": "This shirt is so comfortable!",
                "rating": '4'},
            {"_id": "010", "date": "3/7/2016", "name": "James", "Comments": "This shirt does wonders to wick away sweat!",
                "rating": '4'},
            {"_id": "020", "date": "3/1/2016", "name": "Riggs", "Comments": "Say goodbye to sweat patches",
                "rating": '5'}];

        var api = {
            allReviews: allReviews,
            addReview: addReview
        };

        return api;

        function allReviews() {
            return reviews;
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