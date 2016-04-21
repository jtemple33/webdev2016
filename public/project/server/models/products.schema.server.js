module.exports = function(mongoose) {

    var ProductsSchema = mongoose.Schema(
        {
            productId: String,
            productImageURL: String,
            productName: String,
            productColor: String,
            productPrice: String,
            productDescription: String
        },
        {
            collection: 'project.Products'
        }
    );
    return ProductsSchema;
};