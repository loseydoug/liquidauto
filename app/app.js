'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngMaterial',
    'ngCookies',
    'angular-google-analytics',
    'ui.carousel',
    'myApp.home',
    'myApp.contact',
    'myApp.employment',
    'myApp.equipment',
    'myApp.references',
    'myApp.services',
    'myApp.components'
]).
config(['$locationProvider', '$routeProvider', '$httpProvider', 'AnalyticsProvider', function($locationProvider, $routeProvider, $httpProvider, AnalyticsProvider) {

    AnalyticsProvider
    .setAccount('UA-99331917-1')
    .setPageEvent('$stateChangeSuccess');

    $routeProvider
    .when('/', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    })
    .when('/contact', {
      templateUrl: 'contact/contact.html',
      controller: 'ContactCtrl'
    })
    .when('/employment', {
      templateUrl: 'employment/employment.html',
      controller: 'EmploymentCtrl'
    })
    .when('/equipment', {
      templateUrl: 'equipment/equipment.html',
      controller: 'EquipmentCtrl'
    })
    .when('/references', {
      templateUrl: 'references/references.html',
      controller: 'ReferencesCtrl'
    })
    .when('/services', {
      templateUrl: 'services/services.html',
      controller: 'ServicesCtrl'
    });

    $routeProvider.otherwise({redirectTo: '/'});

}]).

run(['$rootScope', '$location', '$window', '$cookieStore', '$http', 'Analytics', function($rootScope, $location, $window, $cookieStore, $http, Analytics) {
    $rootScope.isSupported = true;
    // window.onload
    document.onreadystatechange = function() {
        if (document.readyState === 'complete') {
            var ie = /MSIE (\d+)/.exec(navigator.userAgent);
            ie = ie ? ie[1]: null;

            if (ie && ie <= 10) {
                $rootScope.isSupported = false;
            }
        }
    }
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
    });
}]);
