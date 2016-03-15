(function () {
    angular
        .module ("WebAppMakerApp")
        .controller ("DeveloperListController", developerListController)
        .controller ("NewDeveloperController", newDeveloperController);

    function developerListController () {
        var vm = this;
    }

    function newDeveloperController () {
        var vm = this;
        vm.createDeveloper = createDeveloper;

        function createDeveloper (developer) {
            console.log (developer);
        }
    }
})();