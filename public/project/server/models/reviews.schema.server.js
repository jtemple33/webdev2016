module.exports = function(mongoose) {

    var ReviewsSchema = mongoose.Schema(
        {
            userId: String,
            productId: String,
            date: String,
            name: String,
            Comments: String,
            rating: String
        },
        {
            collection: 'project.Reviews'
        }
    );
    return ReviewsSchema;
};