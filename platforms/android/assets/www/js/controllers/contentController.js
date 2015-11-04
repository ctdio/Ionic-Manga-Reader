// controller for menu swapping with menu
angular.module('app.controllers').controller("ContentController", [
  "$scope", "ionicMaterialInk", "$ionicPlatform", "$ionicScrollDelegate", "$ionicHistory",
  function($scope,ionicMaterialInk, $ionicPlatform, $ionicScrollDelegate, $ionicHistory){
  //new WOW().init();
  $scope.isExpanded = false;
  $scope.setExpanded = function(bool) {
    $scope.isExpanded = bool;
  };
  ionicMaterialInk.displayEffect();
}]);
