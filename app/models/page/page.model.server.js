module.exports = function(applicationModel) {

    var Application = applicationModel.getMongooseModel();

    var api = {
        createPage: createPage,
        findPagesForApplication: findPagesForApplication,
        findPage: findPage,
        removePage: removePage
    };
    return api;

    // 5.0
    function removePage(applicationId, pageId) {
        return Application
            .findById(applicationId)
            .then(
                function(application){
                    application.pages.id(pageId).remove();
                    return application.save();
                }
            );
    }

    function findPage(applicationId, pageId) {
        return Application
            .findById(applicationId)
            .then(
                function(application){
                    return application.pages.id(pageId);
                }
            );
    }

    function findPagesForApplication(applicationId) {
        // use select() to retrieve a particular field
        return Application.findById(applicationId).select("pages");
    }

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
