(function () {
    angular
        .module ("WebAppMakerApp")
        .config (Configure);

    function Configure ($routeProvider) {
        $routeProvider
            // developer routes
            .when ("/developer", {
                templateUrl: "views/developer/developer-list.view.html",
                controller: "DeveloperListController",
                controllerAs: "model"
            })
            .when ("/developer/new", {
                templateUrl: "views/developer/developer-new.view.html",
                controller: "NewDeveloperController",
                controllerAs: "model"
            })
            .when ("/developer/edit/:username", {
                templateUrl: "views/developer/developer-edit.view.html",
                controller: "EditDeveloperController",
                controllerAs: "model"
            })

            // application routes
            .when ("/developer/:username/application", {
                templateUrl: "views/application/application-list.view.html",
                controller: "ApplicationListController",
                controllerAs: "model"
            })
            .when ("/developer/:username/application/new", {
                templateUrl: "views/application/application-new.view.html",
                controller: "NewApplicationController",
                controllerAs: "model"
            })
            .when ("/developer/:username/application/edit/:applicationId", {
                templateUrl: "views/application/application-edit.view.html"
            })

            .otherwise ({
                redirectTo: "/developer"
            });
    }
})();