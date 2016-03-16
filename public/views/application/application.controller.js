(function () {
    angular
        .module ("WebAppMakerApp")
        .controller ("ApplicationListController", applicationListController);

    function applicationListController ($routeParams) {
        var vm = this;
        vm.username = $routeParams.username;
    }
})();