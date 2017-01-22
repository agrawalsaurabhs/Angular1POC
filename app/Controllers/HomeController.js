(function () {

    var app = angular.module("app");

    var HomeController = function ($scope, $interval, $location) {
        $scope.name="saurabh";
        $scope.countdown = 5;
        
        var decrementCountdown = function () {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.searchUser();
            }
        }

        var countDownInterval = null;
        var startCountdown = function () {
            countDownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        }
        startCountdown();

        $scope.searchUser = function () {
            if (countDownInterval) {
                $interval.cancel(countDownInterval);
                $scope.countdown = null;
            }
            $location.path("/person/" + $scope.name);
        }

    }
    app.controller("HomeController", HomeController, ["$interval", "$location"]);

})();










