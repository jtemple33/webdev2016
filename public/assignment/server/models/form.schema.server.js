var fieldSchema = require('./field.schema.server.js');

module.exports = function (mongoose) {
    var FormSchema = mongoose.Schema(
        {
            userId: String,
            title: {
                type: String,
                default: 'New Form'
            },
            fields: [fieldSchema],
            created: {
                type: Date,
                default: Date.now
            },
            updated: {
                type: Date,
                default: Date.now
            }
        },
        {
            collection: 'form'
        }
    );

    return FormSchema;
};