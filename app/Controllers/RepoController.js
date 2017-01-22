(function()
{

    var app = angular.module("app");

    var RepoController =  function($scope, $routeParams,gitHubService){

        $scope.repoName = $routeParams.reponame; 
        $scope.userName = $routeParams.username;
        $searchUrl = "https://api.github.com/repos/" + $scope.userName + "/" + $scope.repoName;

        gitHubService.getRepoDetails($searchUrl)
                     .then(function(response){
                        $scope.repoDetails = response.data;
                     }, function(response)
                     {

                     });
    }



    app.controller("RepoController", RepoController, ["$routeParams","gitHubService"] )




})();