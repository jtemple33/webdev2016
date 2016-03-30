(function () {
    angular
        .module ("WebAppMakerApp")
        .controller ("PageListController", pageListController)
        .controller ("NewPageController", newPageController)
        .controller ("EditPageController", editPageController);

    function editPageController ($routeParams, PageService, $location) {

        var vm = this;
        vm.username      = $routeParams.username;
        vm.applicationId = $routeParams.applicationId;
        vm.pageId        = $routeParams.pageId;

        vm.removePage    = removePage;
        vm.updatePage    = updatePage;

        function init() {
            PageService
                .findPage(vm.applicationId, vm.pageId)
                .then(
                    function (response) {
                        vm.page = response.data;
                    },
                    function (err) {
                        vm.error = err;
                    }
                )
        }
        init();

        function updatePage(page) {
            PageService
                .updatePage(vm.applicationId, page)
                .then(
                    function (response) {
                        $location.url("/developer/"+vm.username+"/application/"+vm.applicationId+"/page");
                    },
                    function (err) {
                        vm.error = err;
                    }
                )
        }

        function removePage(page) {
            PageService
                .removePage(vm.applicationId, vm.pageId)
                .then(
                    function (response) {
                        $location.url("/developer/"+vm.username+"/application/"+vm.applicationId+"/page");
                    },
                    function (err) {
                        vm.error = err;
                    }
                )
        }
    }

    function pageListController ($routeParams, PageService) {

        var vm = this;
        vm.username      = $routeParams.username;
        vm.applicationId = $routeParams.applicationId;

        vm.sortPage      = sortPage;

        function init() {
            PageService
                .findPagesForApplication(vm.applicationId)
                .then(
                    function (response) {
                        vm.pages = response.data;
                    },
                    function (err) {
                        vm.error = err;
                    }
                );
        }
        init();

        function sortPage(start, end) {
            PageService
                .sortPage(vm.applicationId, start, end)
                .then(
                    function (response) {
                        vm.pages = response.data;
                    },
                    function (err) {
                        vm.error = err;
                    }
                );
        }
    }

    function newPageController($routeParams, PageService, $location) {

        var vm = this;
        vm.applicationId = $routeParams.applicationId;
        vm.username      = $routeParams.username;
        vm.createPage = createPage;

        function createPage(page) {
            PageService
                .createPage(vm.applicationId, page)
                .then(
                    function(response) {
                        $location.url("/developer/"+vm.username+"/application/"+vm.applicationId+"/page");
                    }
                )
        }
    }

})();