module.exports = function(applicationModel) {

    var Application = applicationModel.getMongooseModel();

    var api = {
        createPage: createPage,
        findPagesForApplication: findPagesForApplication,
        findPage: findPage,
        removePage: removePage,
        updatePage: updatePage,
        sortPage: sortPage
    };
    return api;

    function sortPage(applicationId, startIndex, endIndex) {
        return Application
            .findById(applicationId)
            .then(
                function(application) {
                    application.pages.splice(endIndex, 0, application.pages.splice(startIndex, 1)[0]);

                    // notify mongoose 'pages' field changed
                    application.markModified("pages");

                    application.save();
                }
            );
    }

    function updatePage(applicationId, pageObj) {
        return Application
            .findById(applicationId)
            .then(
                function(application){
                    var page   = application.pages.id(pageObj._id);
                    page.name  = pageObj.name;
                    page.title = pageObj.title;
                    return application.save();
                }
            );
    }

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
