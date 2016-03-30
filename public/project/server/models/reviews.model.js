var users = require('./reviews.json');

module.exports = function() {

    var api = {
        allReviewsByProductId: allReviewsByProductId
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

};