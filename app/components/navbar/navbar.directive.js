'use strict';

angular.module('myApp.components.navbar-directive', []).directive('navbar', function() {
    return {
        restrict: 'A',
        scope: {},
        templateUrl: 'components/navbar/navbar-directive.html',
        controller: [ '$rootScope', '$scope', '$window', function($rootScope, $scope, $window) {
            $scope.getActiveLink = function(){
                return $rootScope.activeLink;
            };

            $scope.close = function($mdMenu) {
                console.log($mdMenu)
            }
        }]
    };

});
