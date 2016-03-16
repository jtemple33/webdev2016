(function () {
    angular
        .module ("WebAppMakerApp")
        .factory ("ApplicationService", applicationService);

    function applicationService ($http) {
        var api = {
            createApplication: createApplication
        };
        return api;

        function  createApplication (application) {
            $http.post ("/api/developer/"+application.developerUsername+"/application", application);
        }
    }
})();