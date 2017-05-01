angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $state, mainSrv){


$scope.currentPackage = mainSrv.getCurrentPackage($state.params.id);






}) // End of controller -----------------------------------------------------------
