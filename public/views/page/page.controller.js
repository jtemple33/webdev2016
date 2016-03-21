(function () {
    angular
        .module ("WebAppMakerApp")
        .controller ("PageListController", pageListController)
        .controller ("NewPageController", newPageController);

    function pageListController ($routeParams) {

        var vm = this;
        vm.username      = $routeParams.username;
        vm.applicationId = $routeParams.applicationId;

    }

    function newPageController($routeParams, PageService) {
        var vm = this;
        vm.applicationId = $routeParams.applicationId;
        vm.createPage = createPage;

        function createPage(page) {
            PageService.createPage(vm.applicationId, page);
        }
    }

})();