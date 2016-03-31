
module.exports = function(app, reviewModel) {
    app.get("/api/project/reviews/:productId", getReviews);
    app.post("/api/project/reviews", addReview);

    function getReviews(req, res) {
        var productId = req.params.productId;
        res.json(reviewModel.allReviewsByProductId(productId));
    }

    function addReview(req, res) {
        var review = req.body;
        res.json(reviewModel.addReview(review));
    }
};