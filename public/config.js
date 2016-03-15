(function () {
    angular
        .module ("WebAppMakerApp")
        .config (Configure);

    function Configure ($routeProvider) {
        $routeProvider
            .when ("/developer", {
                templateUrl: "views/developer/developer-list.view.html",
                controller: "DeveloperListController",
                controllerAs: "model"
            })
            .when ("/developer/new", {
                templateUrl: "views/developer/developer-new.view.html"
            })
            .otherwise ({
                redirectTo: "/developer"
            });
    }
})();