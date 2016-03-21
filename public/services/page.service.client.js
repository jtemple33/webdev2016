(function () {
    angular
        .module ("WebAppMakerApp")
        .factory ("PageService", pageService);

    function pageService ($http) {
        var api = {
            createPage: createPage
        };
        return api;

        function createPage(applicationId, page) {
            return $http.post("/api/application/"+applicationId+"/page", page);
        }
    }
})();