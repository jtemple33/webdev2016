(function () {
    angular
        .module ("WebAppMakerApp")
        .factory ("ApplicationService", applicationService);

    function applicationService ($http) {
        var api = {
            createApplication: createApplication,
            findApplicationsForUsername: findApplicationsForUsername,
            findApplicationById: findApplicationById,
            removeApplication: removeApplication
        };
        return api;

        function removeApplication(application) {
            console.log(application);
        }

        function findApplicationById (applicationId) {
            return $http.get ("/api/application/"+applicationId);
        }

        function findApplicationsForUsername (username) {
            return $http.get ("/api/developer/"+username+"/application");
        }

        function  createApplication (application) {
            return $http.post ("/api/developer/"+application.developerUsername+"/application", application);
        }
    }
})();