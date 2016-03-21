(function(){
    angular
        .module("WebAppMakerApp")
        .factory("WidgetService", widgetService);

    function widgetService($http) {
        var api = {
            addWidget: addWidget
        };
        return api;

        function addWidget(applicationId, pageId, widgetType) {
            return $http.post("/api/application/"+applicationId+"/page/"+pageId+"/widget?widgetType="+widgetType);
        }
    }
})();