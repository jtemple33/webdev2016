(function () {
    angular
        .module ("WebAppMakerApp")
        .controller ("DeveloperListController", developerListController)
        .controller ("NewDeveloperController", newDeveloperController);

    function developerListController () {
        var vm = this;
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