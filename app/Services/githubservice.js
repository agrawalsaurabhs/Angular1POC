(function () {

    
    var gitHubService = function ($http) {

        var searchUser = function(searchUrl)
        {
            return $http.get(searchUrl);
        }

        var searchRepos = function(searchUrl)
        {
            return $http.get(searchUrl);
        }

        var getRepoDetails =function(searchUrl)
        {
            return $http.get(searchUrl);
        }

        return {
            searchUser : searchUser,
            searchRepos : searchRepos,
            getRepoDetails  : getRepoDetails
        }
    }

    var app = angular.module("app");

    app.service("gitHubService", gitHubService, ["$http"]);
    

})();