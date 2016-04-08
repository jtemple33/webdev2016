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
                templateUrl: "views/store/products.view.html",
                controller: "ProductController"
            })
            .when("/sale", {
                templateUrl: "views/store/sale.view.html"
            })
            .when("/products/:productId/details", {
                templateUrl: "views/products/product_details.html",
                controller: "ProductDetailsController"
            })
            .when("/performance_stretch_blue", {
                templateUrl: "views/products/performance_stretch_blue.view.html"
            })
            .when("/cart", {
                templateUrl: "views/store/cart.view.html"
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
            .when("/faq", {
                templateUrl: "views/store/faq.html"
            })
            .otherwise({
                redirectTo: "/our_story"
            });
    }
})();