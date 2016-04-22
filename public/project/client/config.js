(function(){
    angular
        .module("238Hem")
        .config(Configuration);

    function Configuration($routeProvider) {
        $routeProvider
            .when("/our_story", {
                templateUrl: "views/store/our_story.view.html",
                resolve: {
                    loggedin: checkCurrentUser
                }
            })
            .when("/admin", {
                templateUrl: "views/admin/admin.view.html",
                controller: "AdminController",
                resolve: {
                    loggedin: checkAdmin
                }
            })
            .when("/admin/users", {
                templateUrl: "views/admin/adminUsers.view.html",
                controller: "AdminUsersController",
                resolve: {
                    loggedin: checkAdmin
                }
            })
            .when("/admin/editProduct/:productId", {
                templateUrl: "views/admin/adminEditProducts.view.html",
                controller: "adminEditProductsController",
                resolve: {
                    loggedin: checkAdmin
                }
            })
            .when("/dress_shirts", {
                templateUrl: "views/products/products.view.html",
                controller: "ProductController",
                resolve: {
                    loggedin: checkCurrentUser
                }
            })
            .when("/sale", {
                templateUrl: "views/store/sale.view.html",
                resolve: {
                    loggedin: checkCurrentUser
                }
            })
            .when("/products/:productId/details", {
                templateUrl: "views/products/product_details.html",
                controller: "ProductDetailsController",
                resolve: {
                    loggedin: checkCurrentUser
                }
            })
            .when("/performance_stretch_blue", {
                templateUrl: "views/products/performance_stretch_blue.view.html"
            })
            .when("/cart", {
                templateUrl: "views/store/cart.view.html",
                controller: "CartController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when("/login", {
                templateUrl: "views/users/login.view.html",
                controller: "LoginController"
            })
            .when("/profile", {
                templateUrl: "views/users/profile.view.html",
                controller: "ProfileController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when("/register", {
                templateUrl: "views/users/register.view.html",
                controller: "RegisterController"
            })
            .when("/faq", {
                templateUrl: "views/store/FAQ.html"
            })
            .otherwise({
                redirectTo: "/our_story"
            });
    }

    var checkAdmin = function($q, $timeout, $http, $location, $rootScope)
    {
        var deferred = $q.defer();

        $http.get('/api/loggedin').success(function(user)
        {
            $rootScope.errorMessage = null;
            // User is Authenticated
            if (user !== '0' && user.role == "admin")
            {
                $rootScope.currentUser = user;
                deferred.resolve();
            }
            else {
                alert("You must login as an admin to access that page");
                $location.url('/login');
            }
        });
        return deferred.promise;
    };

    var checkLoggedin = function($q, $timeout, $http, $location, $rootScope)
    {
        var deferred = $q.defer();

        $http.get('/api/loggedin').success(function(user)
        {
            // User is Authenticated
            if (user !== '0')
            {
                $rootScope.currentUser = user;
                deferred.resolve();
            }
            // User is Not Authenticated
            else
            {
                alert('You need to log in.');
                deferred.reject();
                $location.url('/login');
            }
        });

        return deferred.promise;
    };

    var checkCurrentUser = function($q, $timeout, $http, $location, $rootScope)
    {
        var deferred = $q.defer();

        $http.get('/api/loggedin').success(function(user)
        {
            $rootScope.errorMessage = null;
            // User is Authenticated
            if (user !== '0')
            {
                $rootScope.currentUser = user;
            }
            deferred.resolve();
        });

        return deferred.promise;
    };
})();