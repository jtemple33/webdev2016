(function () {
    angular
        .module ("WebAppMakerApp")
        .factory ("ApplicationService", applicationService);

    function applicationService () {
        var api = {
            createApplication: createApplication
        };
        return api;

        function  createApplication (application) {

        }
    }
})();