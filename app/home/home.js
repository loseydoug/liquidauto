'use strict';

angular.module('myApp.home', ['ngRoute'])
.controller('HomeCtrl', [ '$rootScope', '$scope', '$mdToast', function($rootScope, $scope, $mdToast) {
    $rootScope.activeLink = 'home';

    $scope.currentIndex = 0;
    $scope.dataArray = [
        { src: 'assets/100_2335.jpg' },
        { src: 'assets/100_2337.jpg' },
        { src: 'assets/100_2338.jpg' },
        { src: 'assets/100_2339.jpg' },
        { src: 'assets/100_2341.jpg' },
        { src: 'assets/100_2344.jpg' }
    ]
}]);
