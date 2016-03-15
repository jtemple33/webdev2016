(function () {
    angular
        .module ("WebAppMakerApp")
        .factory ("DeveloperService", developerService);

    function developerService () {
        var api = {
            createDeveloper: createDeveloper
        };
        return api;

        function createDeveloper (developer) {
            console.log (developer);
        }
    }
})();