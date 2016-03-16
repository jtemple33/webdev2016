(function () {
    angular
        .module ("WebAppMakerApp")
        .controller ("ApplicationListController", applicationListController)
        .controller ("NewApplicationController", newApplicationController);

    function applicationListController ($routeParams) {
        var vm = this;
        vm.username = $routeParams.username;
    }

    function newApplicationController () {

    }
})();