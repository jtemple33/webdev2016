module.exports = function(applicationModel) {

    var Application = applicationModel.getMongooseModel();

    var api = {
        createPage: createPage
    };
    return api;

    function createPage(applicationId, page) {
        return Application.findById(applicationId)
            .then(
                function(application) {
                    application.pages.push(page);
                    return application.save();
                }
            );
    }
};
