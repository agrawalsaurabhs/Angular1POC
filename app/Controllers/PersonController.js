(function () {

    var app = angular.module("app");

    var PersonController = function ($scope, $routeParams, gitHubService) {

        $scope.sortorder = "stargazers_count";
        $scope.name = $routeParams.username;

        var searchUrl = "https://api.github.com/users/" + $scope.name;
        gitHubService.searchUser(searchUrl).then(function (response) {
            var person = {
                name: response.data.name,
                location: response.data.location,
                avatar_url: response.data.avatar_url,
                login : response.data.login
            };

            gitHubService.searchRepos(response.data.repos_url).then(
                function (response) {
                    person.repos = [];
                    response.data.forEach(function (element) {
                        person.repos.push(element);
                    }, this);
                    $scope.person = person;
                },
                function (response) {

                }
            );
        });

    }
    app.controller("PersonController", PersonController, ["$routeParams", "gitHubService"]);

})();










