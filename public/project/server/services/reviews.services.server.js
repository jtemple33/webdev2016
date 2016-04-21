
module.exports = function(app, reviewModel) {
    app.get("/api/project/reviews/:productId", getReviewsByProductId);
    app.post("/api/project/reviews", addReview);
    app.get("/api/project/userReviews/:userId", getReviewsByUserId);
    app.put("/api/project/deleteReview", deleteReview);

    function getReviewsByProductId(req, res) {
        var productId = req.params.productId;
        //res.json(reviewModel.allReviewsByProductId(productId));
        reviewModel
            .allReviewsByProductId(productId)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

    function getReviewsByUserId(req, res) {
        var userId = req.params.userId;
        reviewModel
            .allReviewsByUserId(userId)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

    function addReview(req, res) {
        var review = req.body;
        //res.json(reviewModel.addReview(review));
        reviewModel
            .addReview(review)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

    function deleteReview(req, res) {
        var review = req.body;
        //res.json(reviewModel.deleteReview(review));
        reviewModel
            .deleteReview(review)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }
};