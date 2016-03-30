
module.exports = function(app, reviewModel) {
    app.get("/api/project/reviews/:productId", getReviews);

    function getReviews(req, res) {
        var productId = req.params.productId;
        res.json(reviewModel.getReviews(productId));
    }
};