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

    function chooseWidgetController ($routeParams, WidgetService) {

        var vm = this;

        vm.applicationId = $routeParams.applicationId;
        vm.pageId        = $routeParams.pageId;

        vm.selectWidget = selectWidget;

        function selectWidget(widgetType) {
            WidgetService
                .addWidget(vm.applicationId, vm.pageId, widgetType);
        }
    }

})();