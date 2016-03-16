(function () {
    angular
        .module ("WebAppMakerApp")
        .controller ("DeveloperListController", developerListController)
        .controller ("NewDeveloperController", newDeveloperController);

    function developerListController (DeveloperService) {
        var vm = this;

        function init () {
            DeveloperService
                .findAllDevelopers ()
                .then(
                    function (developers) {
                        console.log(developers.data);
                    },
                    function (err) {
                        console.log(err);
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
})();