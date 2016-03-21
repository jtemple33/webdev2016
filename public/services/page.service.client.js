(function () {
    angular
        .module ("WebAppMakerApp")
        .factory ("PageService", pageService);

    function pageService ($http) {
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
            return $http.put("/api/application/"+applicationId+"/page?startIndex="+startIndex+"&endIndex="+endIndex);
        }

        function updatePage(applicationId, page) {
            return $http.put("/api/application/"+applicationId+"/page/"+page._id, page);
        }

        function removePage(applicationId, pageId) {
            return $http.delete("/api/application/"+applicationId+"/page/"+pageId);
        }


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