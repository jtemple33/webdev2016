module.exports = function(mongoose) {

    var cartSchema = mongoose.Schema(
        {
            productId: String,

        },
        {
            collection: 'cart.User'
        }
    );
    return cartSchema;
};