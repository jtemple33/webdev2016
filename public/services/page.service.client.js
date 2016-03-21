(function () {
    angular
        .module ("WebAppMakerApp")
        .factory ("PageService", pageService);

    function pageService ($http) {
        var api = {
            createPage: createPage,
            findPagesForApplication: findPagesForApplication,
            findPage: findPage
        };
        return api;

        // 2.0
        function findPage(applicationId, pageId) {
            return $http.get("/api/application/"+applicationId+"/page/"+pageId);
        }

        function findPagesForApplication(applicationId) {
            return $http.get("/api/application/"+applicationId+"/page");
        }

        function createPage(applicationId, page) {
            return $http.post("/api/application/"+applicationId+"/page", page);
        }
    }
})();