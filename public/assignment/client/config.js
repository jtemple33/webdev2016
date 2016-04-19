(function(){
    angular
        .module("FormBuilderApp")
        .config(Configuration);

    function Configuration($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "views/home/home.view.html",
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
            .when("/forms", {
                templateUrl: "views/forms/forms.view.html",
                controller: "FormController"
            })
            .when("/forms/:formId/fields", {
                templateUrl: "views/forms/fields.view.html",
                controller: "FieldController"
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
            .otherwise({
                redirectTo: "/home"
            });
    }

        var checkAdmin = function($q, $timeout, $http, $location, $rootScope)
        {
            var deferred = $q.defer();

            $http.get('/api/loggedin').success(function(user)
            {
                $rootScope.errorMessage = null;
                // User is Authenticated
                if (user !== '0' && user.roles.indexOf('admin') != -1)
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