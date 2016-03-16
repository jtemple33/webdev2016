(function () {
    angular
        .module ("WebAppMakerApp")
        .factory ("DeveloperService", developerService);

    function developerService ($http) {
        var api = {
            createDeveloper: createDeveloper,
            findAllDevelopers: findAllDevelopers,
            findUserByUsername: findUserByUsername
        };
        return api;

        function findUserByUsername (username) {
            console.log(username);
        }

        function createDeveloper (developer) {
            return $http.post ("/api/developer", developer);
        }

        function findAllDevelopers () {
            return $http.get ("/api/developer");
        }
    }
})();