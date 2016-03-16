(function () {
    angular
        .module ("WebAppMakerApp")
        .controller ("DeveloperListController", developerListController)
        .controller ("NewDeveloperController", newDeveloperController)
        .controller ("EditDeveloperController", editDeveloperController);

    function developerListController (DeveloperService) {
        var vm = this;

        function init () {
            DeveloperService
                .findAllDevelopers ()
                .then(
                    function (developers) {
                        vm.developers = developers.data;
                    },
                    function (err) {
                        vm.error = err;
                    }
                )
        }
        init ();
    }

    function newDeveloperController (
        DeveloperService, $location
    ) {
        var vm = this;
        vm.createDeveloper = createDeveloper;

        function createDeveloper (developer) {
            DeveloperService
                .createDeveloper (developer)
                .then (
                    function (developer) {
                        vm.developer = developer;
                        $location.url ("/developer");
                    },
                    function (error) {
                        vm.error = error;
                    }
                )
        }
    }

    function editDeveloperController ($routeParams, DeveloperService) {
        var username = $routeParams.username;

        function init () {
            DeveloperService
                .findDeveloperByUsername(username)
                .then (
                    function (developer) {
                        console.log (developer.data);
                    },
                    function (error) {
                        console.log (error);
                    }
                );
        }
        init();
    }
})();