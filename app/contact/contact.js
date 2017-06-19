'use strict';

angular.module('myApp.contact', ['ngRoute'])
.controller('ContactCtrl', [ '$rootScope', '$scope', '$routeParams', '$mdToast', function($rootScope, $scope, $routeParams, $mdToast) {
    $rootScope.activeLink = 'contact'
}]);
