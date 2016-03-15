(function () {
    angular
        .module ("WebAppMakerApp")
        .config (Configure);

    function Configure ($routeProvider) {
        $routeProvider
            .when ("/developer", {
                templateUrl: "views/developer/developer-list.view.html"
            })
            .otherwise ({
                redirectTo: "/developer"
            });
    }
})();