(function () {

    var app = angular.module("app", ["ngRoute"]);

    app.config(function ($routeProvider, $locationProvider) {

        $locationProvider.hashPrefix('');
        $routeProvider.when('/', {
            controller: 'HomeController',
            controllerAs: 'vm',
            templateUrl: 'app/Views/search.html'
        })
            .when('/person/:username', {
                controller: 'PersonController',
                controllerAs: 'vm',
                templateUrl: 'app/Views/user.html'
            })
            .when('/repo/:username/:reponame', {
                controller: 'RepoController',
                controllerAs: 'vm',
                templateUrl: 'app/Views/repodetails.html'
            })
            .otherwise({ redirectTo: "/" });
    });

})();