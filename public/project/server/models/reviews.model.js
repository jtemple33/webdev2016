var reviews = require('./reviews.json');

module.exports = function() {

    var api = {
        allReviewsByProductId: allReviewsByProductId,
        addReview: addReview,
        allReviewsByUserId: allReviewsByUserId,
        deleteReview: deleteReview
    };

    return api;

    function allReviewsByProductId(productId) {
        var productReviews = [];
        for (var i = 0; i < reviews.length; i++) {
            if (reviews[i].productId == productId) {
                productReviews.push(reviews[i]);
            }
        }
        return productReviews;
    }

    function addReview(review) {
        reviews.push(review);
        console.log(review);
    }

    function allReviewsByUserId(userId) {
        var userReviews = [];
        for (var i = 0; i < reviews.length; i++) {
            if (reviews[i].userId == userId) {
                userReviews.push(reviews[i]);
            }
        }
        console.log("I did it!");
        console.log(userId);
        console.log(reviews.length);
        return userReviews;
    }

    function deleteReview(review) {
        for (var i = 0; i < reviews.length; i++) {
            if (reviews[i]._id == review._id) {
                reviews.splice(i, 1);
                return reviews;
            }
        }
    }

};