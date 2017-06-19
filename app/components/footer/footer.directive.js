'use strict';

angular.module('myApp.components.footer-directive', []).directive('footer', function() {
    return {
        restrict: 'A',
        scope: {},
        templateUrl: 'components/footer/footer-directive.html',
        controller: [ '$rootScope', '$scope', '$window', function($rootScope, $scope, $window) {
            $scope.isSupported = $rootScope.isSupported;
        }]
    };

});
