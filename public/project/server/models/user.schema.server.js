var productSchema = require('./products.schema.server.js');


module.exports = function(mongoose) {

    var UserSchema = mongoose.Schema(
        {
            username: String,
            password: String,
            firstName: String,
            lastName: String,
            email: String,
            phone: String,
            cart:  [{type:mongoose.Schema.Types.Object, ref:'productSchema'}],
            role: String
        },
        {
            collection: 'project.User'
        }
    );
    return UserSchema;
};