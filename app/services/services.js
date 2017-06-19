'use strict';

angular.module('myApp.services', ['ngRoute'])
.controller('ServicesCtrl', [ '$rootScope', '$scope', '$filter', function($rootScope, $scope, $filter) {
    $rootScope.activeLink = 'services';
}]);
