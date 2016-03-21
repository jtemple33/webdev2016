(function () {
    angular
        .module ("WebAppMakerApp")
        .controller ("WidgetListController", widgetListController)
        .controller ("ChooseWidgetController", chooseWidgetController);

    function widgetListController ($routeParams, PageService, $location) {

        var vm = this;
        vm.username      = $routeParams.username;
        vm.applicationId = $routeParams.applicationId;
        vm.pageId        = $routeParams.pageId;

    }

    function chooseWidgetController () {

    }

})();