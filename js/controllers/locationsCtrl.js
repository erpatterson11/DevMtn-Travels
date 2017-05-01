angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv){

$scope.allLocations = mainSrv.travelInfo;





}) // End of controller -----------------------------------------------------------
