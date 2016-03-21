(function () {
    angular
        .module ("WebAppMakerApp")
        .factory ("PageService", pageService);

    function pageService ($http) {
        var api = {
            createPage: createPage
        };
        return api;

        function createPage(page) {
            console.log(page);
        }
    }
})();