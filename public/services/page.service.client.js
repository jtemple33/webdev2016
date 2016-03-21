(function () {
    angular
        .module ("WebAppMakerApp")
        .factory ("PageService", pageService);

    function pageService ($http) {
        var api = {
            createPage: createPage,
            findPagesForApplication: findPagesForApplication
        };
        return api;

        // 2.0
        function findPagesForApplication(applicationId) {
            return $http.get("/api/application/"+applicationId+"/page");
        }

        function createPage(applicationId, page) {
            return $http.post("/api/application/"+applicationId+"/page", page);
        }
    }
})();