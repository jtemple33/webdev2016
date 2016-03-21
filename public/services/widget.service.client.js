(function(){
    angular
        .module("WebAppMakerApp")
        .factory("WidgetService", widgetService);

    function widgetService() {
        var api = {
            addWidget: addWidget
        };
        return api;

        function addWidget(applicationId, pageId, widgetType) {
            console.log([applicationId, pageId, widgetType]);
        }
    }
})();