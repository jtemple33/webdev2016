(function () {
    angular
        .module ("WebAppMakerApp")
        .controller ("PageListController", pageListController);

    function pageListController ($routeParams) {

        var vm = this;
        vm.username      = $routeParams.username;
        vm.applicationId = $routeParams.applicationId;

    }
})();