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
                templateUrl: "views/developer/developer-new.view.html",
                controller: "NewDeveloperController",
                controllerAs: "model"
            })
            .when ("/developer/edit/:username", {
                templateUrl: "views/developer/developer-edit.view.html"
            })
            .otherwise ({
                redirectTo: "/developer"
            });
    }
})();