var reviews = require('./reviews.json');

module.exports = function() {

    var api = {
        allReviewsByProductId: allReviewsByProductId,
        addReview: addReview
    };

    return api;

    function allReviewsByProductId(productId) {
        var productReviews = [];
        for (var i = 0; i < reviews.length; i++) {
            if (reviews[i]._id == productId) {
                productReviews.push(reviews[i]);
            }
        }
        return productReviews;
    }

    function addReview(review) {
        reviews.push(review);
        console.log(review);
    }

};