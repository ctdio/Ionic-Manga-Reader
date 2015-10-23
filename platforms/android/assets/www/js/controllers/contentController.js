// controller for menu swapping with menu
angular.module('app').controller("ContentController", function($scope, $ionicSideMenuDelegate){
  $scope.toggleLeft = function(){
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.activeTab = 1;
  $scope.setTab = function(tab){
    $scope.activeTab = tab;
  };
  $scope.isActive = function(tab){
    return $scope.activeTab === tab ? true : false;
  };
});
