

var app = angular.module('app', []);

app.service('DateService',
    // provide constructor function, which creates an object 
    function () {
        this.message = "Date Service!";
        this.year = function () {
            var today = new Date();
            return today.getFullYear();
        };
    }
);


app.factory('TimeService',
    // factory function that returns an instance of service instance 
    function () {
        return {
            'hours': new Date().getHours(),
            'minutes': new Date().getMinutes(),
            'seconds': new Date().getSeconds(),
            getTime : function() {
                return new Date().toString();
            }
        }
    }
);




var myController = function ($scope, DateService, TimeService) {
    $scope.year = DateService.year();
    $scope.message = DateService.message;
    $scope.time = TimeService.hours + ":" + TimeService.minutes + ":" + TimeService.seconds;
    $scope.fulltime = TimeService.getTime();

    $scope.changeMessage = function () {
        DateService.message = new Date().toString();
        $scope.message = DateService.message;
    };
}

app.controller('DateController',['$scope','DateService','TimeService',myController]);

