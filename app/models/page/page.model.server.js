module.exports = function(db) {
    var api = {
        createPage: createPage
    };
    return api;

    function createPage(applicationId, page) {
        console.log(applicationId);
        console.log(page);
    }
};
