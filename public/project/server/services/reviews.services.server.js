
module.exports = function(app, reviewModel) {
    app.get("/api/project/reviews/:productId", getReviewsByProductId);
    app.post("/api/project/reviews", addReview);
    app.get("/api/project/userReviews/:userId", getReviewsByUserId);
    app.put("/api/project/deleteReview", deleteReview);

    function getReviewsByProductId(req, res) {
        var productId = req.params.productId;
        res.json(reviewModel.allReviewsByProductId(productId));
    }

    function getReviewsByUserId(req, res) {
        var userId = req.params.userId;
        res.json(reviewModel.allReviewsByUserId(userId));
        console.log("I ran!");
    }

    function addReview(req, res) {
        var review = req.body;
        res.json(reviewModel.addReview(review));
    }

    function deleteReview(req, res) {
        var review = req.body;
        res.json(reviewModel.deleteReview(review));
    }
};