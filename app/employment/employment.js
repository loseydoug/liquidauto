'use strict';

angular.module('myApp.employment', ['ngRoute'])
.controller('EmploymentCtrl', [ '$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
    $rootScope.activeLink = 'employment';
    $scope.states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID',
        'IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE',
        'NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN',
        'TX','UT','VT','VA','WA','WV','WI','WY'];
    $scope.submitButtonText = 'Submit Résumé';
    $scope.resume = {};
    $scope.applicant = {
        first: '',
        last: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: ''
    };

    $scope.isFormValid = function() {
        if ($scope.applicant.first && $scope.applicant.last && $scope.applicant.address &&
            $scope.applicant.city && $scope.applicant.state && $scope.applicant.zip &&
            $scope.applicant.phone && $scope.applicant.email && $scope.resume.type &&
            $scope.resume.type.indexOf('pdf') !== -1 ) {
            $scope.fileError = undefined;
            return true;
        } else {
            if ($scope.resume.type && $scope.resume.type.indexOf('pdf') === -1) {
                $scope.fileError = 'Invalid File, résumé must be a pdf'
            } else {
                $scope.fileError = undefined;
            }
            return false;
        }
    }
    $scope.submit = function() {
        $scope.errorText = undefined;
        $scope.isFormSubmitted = true;
        $scope.submitButtonText = 'Sending Résumé...'
        var fileReader = new FileReader();
        var base64;

        fileReader.onload = function(fileLoadedEvent) {
            $scope.applicant.resume = {
                filename: $scope.resume.name,
                content: fileLoadedEvent.target.result,
                encoding: 'base64'
            }
            $http.post('/sendMail', $scope.applicant).then(function(response) {
                if (response.status === 200) {
                    $scope.submitButtonText = 'Résumé Sent!'
                } else {
                    $scope.errorText = 'An error occured sending your résumé, try again later';
                }
            });
        };
        // Convert data to base64
        fileReader.readAsDataURL($scope.resume);

    }

}]);
