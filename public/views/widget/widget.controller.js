(function () {
    angular
        .module ("WebAppMakerApp")
        .controller ("WidgetListController", widgetListController)
        .controller ("ChooseWidgetController", chooseWidgetController);

    function widgetListController ($routeParams, WidgetService, $location) {

        var vm = this;
        vm.username      = $routeParams.username;
        vm.applicationId = $routeParams.applicationId;
        vm.pageId        = $routeParams.pageId;

        function init() {
            WidgetService
                .getWidgets(vm.applicationId, vm.pageId)
                .then(
                    function(response) {
                        vm.widgets = response.data;
                    },
                    function(err) {
                        vm.error = err;
                    }
                );
        }
        init();

    }

    function chooseWidgetController ($routeParams, WidgetService, $location) {

        var vm = this;

        vm.username = $routeParams.username;
        vm.applicationId = $routeParams.applicationId;
        vm.pageId        = $routeParams.pageId;

        vm.selectWidget = selectWidget;

        function selectWidget(widgetType) {
            WidgetService
                .addWidget(vm.applicationId, vm.pageId, widgetType)
                .then(
                    function(response) {
                        $location.url("/developer/"+vm.username+"/application/"+vm.applicationId+"/page/"+vm.pageId+"/widget");
                    },
                    function(err) {
                        vm.error = err;
                    }
                );
        }
    }

})();