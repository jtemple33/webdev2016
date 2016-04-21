
var q = require("q");

module.exports = function(mongoose, reviewSchema) {

    var reviews = mongoose.model("project.Review", reviewSchema);


    var api = {
        allReviewsByProductId: allReviewsByProductId,
        addReview: addReview,
        allReviewsByUserId: allReviewsByUserId,
        deleteReview: deleteReview
    };

    return api;

    function allReviewsByProductId(productId) {
        /*var productReviews = [];
        for (var i = 0; i < reviews.length; i++) {
            if (reviews[i].productId == productId) {
                productReviews.push(reviews[i]);
            }
        }
        return productReviews;*/
        var deferred = q.defer();

        reviews.find({productId: productId}, function(err, doc) {
            if (err) {
                //rejects promise if error
                deferred.reject(err);
            } else {
                //resolve promise
                deferred.resolve(doc);
            }

        });
        // return a promise
        return deferred.promise;
    }

    function addReview(review) {
        //reviews.push(review);
        //console.log(review);
        // use q to defer the response
        var deferred = q.defer();

        reviews.create(review, function(err, doc) {
            if (err) {
                //rejects promise if error
                deferred.reject(err);
            } else {
                //resolve promise
                deferred.resolve(doc);
                console.log(doc);
            }

        });
        // return a promise
        return deferred.promise;
    }

    function allReviewsByUserId(userId) {
        /*var userReviews = [];
        for (var i = 0; i < reviews.length; i++) {
            if (reviews[i].userId == userId) {
                userReviews.push(reviews[i]);
            }
        }
        console.log("I did it!");
        console.log(userId);
        console.log(reviews.length);
        return userReviews;*/
        var deferred = q.defer();

        reviews.find({userId: userId}, function(err, doc) {
            if (err) {
                //rejects promise if error
                deferred.reject(err);
            } else {
                //resolve promise
                deferred.resolve(doc);
            }

        });
        // return a promise
        return deferred.promise;
    }

    function deleteReview(review) {
        /*for (var i = 0; i < reviews.length; i++) {
            if (reviews[i]._id == review._id) {
                reviews.splice(i, 1);
                return reviews;
            }
        }*/
        var deferred = q.defer();

        reviews.remove({_id: review._id}, function(err,doc) {
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

};