(function(){
    angular
        .module("WebAppMakerApp")
        .factory("WidgetService", widgetService);

    function widgetService($http) {
        var api = {
            addWidget: addWidget,
            getWidgets: getWidgets
        };
        return api;

        function getWidgets(applicationId, pageId) {
            return $http.get("/api/application/"+applicationId+"/page/"+pageId+"/widget");
        }

        function addWidget(applicationId, pageId, widgetType) {
            return $http.post("/api/application/"+applicationId+"/page/"+pageId+"/widget?widgetType="+widgetType);
        }
    }
})();