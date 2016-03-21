module.exports = function(applicationModel) {

    var Application = applicationModel.getMongooseModel();

    var api = {
        createPage: createPage
    };
    return api;

    function createPage(applicationId, page) {
        console.log(applicationId);
        console.log(page);
        Application.findById(applicationId, function(err, app){
            console.log(app);
        });
    }
};
