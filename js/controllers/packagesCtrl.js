angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $state, mainSrv){

  $scope.packageInfo = mainSrv.getPackagesByCountry($state.params.country);

  ($scope.packageInfo.length < 1) ? $scope.packageInfo = mainSrv.packageInfo : "";

console.log(mainSrv.getPackagesByCountry($state.params.country))




}) // End of controller -----------------------------------------------------------
