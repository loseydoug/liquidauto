'use strict';

angular.module('myApp.equipment', ['ngRoute'])
.controller('EquipmentCtrl', [ '$rootScope', '$scope', function($rootScope, $scope) {
    $rootScope.activeLink = 'equipment';

    $scope.equipmentList = [
        '824 Bench bender (13) with various sizes of radius shoes',
        '624 Hydraulic bench bender (2) with various sizes of radius shoes (All benders equipped with appropriate slide & clamp blocks)',
        'Olsen flaring machine (13) with various flaring blocks',
        'Rigid pipe threader (12)',
        'Rigid pipe vise (13)',
        'Hand pipe threader  with various threading dies',
        'Hand power threader with various threading dies',
        'Rigid pipe cutter (2)',
        'Nipple chuck set',
        'Metric radius shoes  (multiple sizes)',
        'EO2 Preset tooling',
        'Metric & Standard  line wrenches',
        'Pipe stand (6)',
        'Hose crimping machine (2)',
        'Parcrimp 2 machine (Crimping machines equipped with several sizes of crimping dies including stainless steel)',
        'Piping gang box with various fittings',
        'Electric hose cutter',
        'Parker parflange machine with various dies',
        'Greenlee conduit bender (3)',
        'Greenlee power conduit bender',
        'Electrical gang box with various fittings',
        'Electrical hand tools - Greenlee terminal crimpers, knock out set, hydraulic knock out, cable cutters, fish tape (2), 16 station wire pull rack',
        'Cutting torches & regulators',
        'Copper sweating torches & regulators (3)',
        'Miller CP 300 mig welder (3)',
        'Craftsman air compressor',
        '6\' - 12\' Ladders (21)'
    ]
}]);
