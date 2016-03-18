(function () {
    angular
        .module ("WebAppMakerApp")
        .controller ("ApplicationListController", applicationListController)
        .controller ("NewApplicationController", newApplicationController)
        .controller ("EditApplicationController", editApplicationController);

    function editApplicationController
        ($routeParams, ApplicationService) {

        var vm = this;
        vm.username = $routeParams.username;
        vm.applicationId = $routeParams.applicationId;

        function init () {
            ApplicationService
                .findApplicationById($routeParams.applicationId)
        }
        init ();
    }

    function applicationListController (
        $routeParams, ApplicationService) {

        var vm = this;
        vm.username = $routeParams.username;

        function init () {
            ApplicationService
                .findApplicationsForUsername (vm.username)
                .then (
                    function (response) {
                        vm.applications = response.data;
                    },
                    function (err) {
                        vm.error = err;
                    }
                )
        }
        init ();
    }

    function newApplicationController (
        $routeParams, ApplicationService, $location) {

        var vm = this;
        vm.username = $routeParams.username;
        vm.createApplication = createApplication;

        function createApplication (application) {
            application.developerUsername = vm.username;
            ApplicationService
                .createApplication (application)
                .then (
                    function (response) {
                        $location.url ("/developer/"+vm.username+"/application");
                    },
                    function (err) {
                        vm.error = err;
                    }
                )
        }
    }
})();