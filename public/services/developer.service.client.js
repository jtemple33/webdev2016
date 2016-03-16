(function () {
    angular
        .module ("WebAppMakerApp")
        .factory ("DeveloperService", developerService);

    function developerService ($http) {
        var api = {
            createDeveloper: createDeveloper,
            findAllDevelopers: findAllDevelopers
        };
        return api;

        function createDeveloper (developer) {
            return $http.post ("/api/developer", developer);
        }

        function findAllDevelopers () {
            console.log ("findAllDevelopers");
        }
    }
})();