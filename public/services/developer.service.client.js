(function () {
    angular
        .module ("WebAppMakerApp")
        .factory ("DeveloperService", developerService);

    function developerService ($http) {
        var api = {
            createDeveloper: createDeveloper
        };
        return api;

        function createDeveloper (developer) {
            return $http.post ("/api/developer", developer);
        }
    }
})();