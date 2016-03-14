(function(){
    angular
        .module("238Hem")
        .config(Configuration);

    function Configuration($routeProvider) {
        $routeProvider
            .when("/our_story", {
                templateUrl: "views/store/our_story.view.html"
            })
            .when("/dress_shirts", {
                templateUrl: "views/store/dress_shirts.view.html"
            })
            .when("/sale", {
                templateUrl: "views/store/sale.view.html"
            })
            .when("/login", {
                templateUrl: "views/users/login.view.html",
                controller: "LoginController"
            })
            .when("/profile", {
                templateUrl: "views/users/profile.view.html",
                controller: "ProfileController"
            })
            .when("/register", {
                templateUrl: "views/users/register.view.html",
                controller: "RegisterController"
            })
            .otherwise({
                redirectTo: "/our_story"
            });
    }
})();